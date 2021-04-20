package controller

import "fmt"

//RUN is ...
func RUN() {
	if setup() != nil {
		fmt.Println("Failed to Setup Program")
	}
}

func setup() (err error) {
	go runReST()
	go runWeb()
	return nil
}
