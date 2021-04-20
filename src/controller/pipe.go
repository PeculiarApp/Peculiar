package controller

type PipeDataType struct {
	isString   bool
	isObject   bool
	isNumber   bool
	isDataTime bool
}

type PipeData struct {
	dataType PipeDataType
	value    string
	name     string
}

type PipeCode struct {
}

func runPipe(pipe PipeCode, data PipeData) PipeData {
	return PipeData{}
}

func loadPipe(pipe string) PipeCode {
	return PipeCode{}
}
