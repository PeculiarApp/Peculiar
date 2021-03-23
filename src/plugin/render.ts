import type {MarkdownPostProcessorContext} from 'obsidian'
// import * as Yaml from 'yaml'
import Chart from 'chart.js'

export default class DataNoteRenderer {
	static async postprocessor(el: HTMLElement, ctx: MarkdownPostProcessorContext) {
        let chartElement = <HTMLCanvasElement> document.getElementById("chart")
        let chart = chartElement.getContext("2d")
        
        let newChart = new Chart(chart, {
            
        })
    }
}