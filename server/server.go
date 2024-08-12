package main

import (
	"context"
	pb "grpc-project/proto"
	"log"
	"net"

	"google.golang.org/grpc"
)

type server struct {
	cache map[uint64]string

	pb.UnimplementedSessionServiceServer
}

func (s *server) AddSession(ctx context.Context, req *pb.AddSessionRequest) (*pb.AddSessionResponse, error) {
	id := req.GetID()
	session := req.GetSession()

	_, exists := s.cache[id]

	if exists {
		return &pb.AddSessionResponse{Success: false}, nil
	}

	s.cache[id] = session
	return &pb.AddSessionResponse{Success: true}, nil
}

func (s *server) GetSession(ctx context.Context, req *pb.GetSessionRequest) (*pb.GetSessionResponse, error) {
	id := req.GetID()
	session, exists := s.cache[id]

	if !exists {
		return &pb.GetSessionResponse{Session: ""}, nil
	}

	return &pb.GetSessionResponse{Session: session}, nil
}

func (s *server) DelSession(ctx context.Context, req *pb.DelSessionRequest) (*pb.DelSessionResponse, error) {
	id := req.GetID()
	_, exists := s.cache[id]

	if !exists {
		return &pb.DelSessionResponse{Success: false}, nil
	}

	delete(s.cache, id)
	return &pb.DelSessionResponse{Success: true}, nil
}

func main() {
	s := &server{
		cache: make(map[uint64]string),
	}

	grpcServer := grpc.NewServer()

	pb.RegisterSessionServiceServer(grpcServer, s)

	listener, err := net.Listen("tcp", ":8080")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	log.Println("Server is listening on port 8080")
	if err := grpcServer.Serve(listener); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
