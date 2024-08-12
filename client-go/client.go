package main

import (
	"bufio"
	pb "client-grpc/proto"
	"context"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
	"time"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func main() {
	conn, err := grpc.NewClient("localhost:8080", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	defer conn.Close()
	c := pb.NewSessionServiceClient(conn)

	reader := bufio.NewReader(os.Stdin)

	for {
		fmt.Println("Select an action:")
		fmt.Println("1. Add Session")
		fmt.Println("2. Get Session")
		fmt.Println("3. Delete Session")
		fmt.Println("4. Exit")

		fmt.Print("Enter your choice: ")
		choiceStr, _ := reader.ReadString('\n')
		choiceStr = strings.TrimSpace(choiceStr)
		choice, err := strconv.Atoi(choiceStr)
		if err != nil {
			fmt.Println("Invalid input, please enter a number between 1 and 4.")
			continue
		}

		ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
		defer cancel()

		switch choice {
		case 1:
			fmt.Print("Enter session ID: ")
			idStr, _ := reader.ReadString('\n')
			idStr = strings.TrimSpace(idStr)
			id, _ := strconv.ParseUint(idStr, 10, 64)

			fmt.Print("Enter session data: ")
			session, _ := reader.ReadString('\n')
			session = strings.TrimSpace(session)

			r, err := c.AddSession(ctx, &pb.AddSessionRequest{
				ID:      id,
				Session: session,
			})
			if err != nil {
				log.Fatalf("could not add session: %v", err)
			}
			log.Printf("Session registered: %t", r.Success)

		case 2:
			fmt.Print("Enter session ID: ")
			idStr, _ := reader.ReadString('\n')
			idStr = strings.TrimSpace(idStr)
			id, _ := strconv.ParseUint(idStr, 10, 64)

			session, err := c.GetSession(ctx, &pb.GetSessionRequest{ID: id})
			if err != nil {
				log.Fatalf("could not get session: %v", err)
			}
			log.Printf("Session: %s", session.Session)

		case 3:
			fmt.Print("Enter session ID: ")
			idStr, _ := reader.ReadString('\n')
			idStr = strings.TrimSpace(idStr)
			id, _ := strconv.ParseUint(idStr, 10, 64)

			res, err := c.DelSession(ctx, &pb.DelSessionRequest{ID: id})
			if err != nil {
				log.Fatalf("could not delete session: %v", err)
			}
			log.Printf("Session deleted: %t", res.Success)

		case 4:
			fmt.Println("Exiting...")
			return

		default:
			fmt.Println("Invalid choice, please enter a number between 1 and 4.")
		}
	}
}
