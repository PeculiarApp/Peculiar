import { App, WorkspaceLeaf, Plugin, PluginSettingTab, Setting, MarkdownPreviewRenderer } from 'obsidian'
import DataNoteRenderer from './render'

import { 
	VIEW_TYPE_Query,
	VIEW_TYPE_Template,
	VIEW_TYPE_Data,
	VIEW_TYPE_Pipes,
	VIEW_TYPE_Anchor
} from "./constants"

import { 
	QueryView,
	TemplateView,
	PipeView,
	DataView,
	AnchorView
} from "./views"

declare global {
	
}



interface PeculiarSettings {
	port: Number
}

const DEFAULT_SETTINGS: PeculiarSettings = {
	port: 3000
}

export default class PeculiarPlugin extends Plugin {
	settings: PeculiarSettings
	private qview: QueryView
	private tview: TemplateView
	private cview: PipeView
	private vview: DataView
	private sview: AnchorView

	async onload() {
		console.log("Loading Peculiar")
		await this.loadSettings()
		this.addSettingTab(new PeculiarSetting(this.app, this))

		this.registerView(
			VIEW_TYPE_Anchor,
			(leaf: WorkspaceLeaf) => {
				this.sview = new AnchorView(leaf, this)
				return this.sview
			}
		)

		this.registerView(
			VIEW_TYPE_Query,
			(leaf: WorkspaceLeaf) => {
				this.qview = new QueryView(leaf, this)
				return this.qview
			}
		)

		this.registerView(
			VIEW_TYPE_Template,
			(leaf: WorkspaceLeaf) => {
				this.tview = new TemplateView(leaf, this)
				return this.tview
			}
		)

		this.registerView(
			VIEW_TYPE_Pipes,
			(leaf: WorkspaceLeaf) => {
				this.cview = new PipeView(leaf, this)
				return this.cview
			}
		)

		this.registerView(
			VIEW_TYPE_Data,
			(leaf: WorkspaceLeaf) => {
				this.vview = new DataView(leaf, this)
				return this.vview
			}
		)

		

		MarkdownPreviewRenderer.registerPostProcessor(DataNoteRenderer.postprocessor)


		if (this.app.workspace.layoutReady) this.initLeaf()
    	else this.registerEvent(this.app.workspace.on("layout-ready", () => this.initLeaf()))
	}

	onunload() {
		console.log('Unloading Peculiar')
		this.app.workspace
      		.getLeavesOfType(VIEW_TYPE_Query)
      		.forEach((leaf) => leaf.detach())
		this.app.workspace
      		.getLeavesOfType(VIEW_TYPE_Template)
      		.forEach((leaf) => leaf.detach())
		this.app.workspace
      		.getLeavesOfType(VIEW_TYPE_Data)
      		.forEach((leaf) => leaf.detach())
		this.app.workspace
      		.getLeavesOfType(VIEW_TYPE_Pipes)
      		.forEach((leaf) => leaf.detach())
		this.app.workspace
      		.getLeavesOfType(VIEW_TYPE_Anchor)
      		.forEach((leaf) => leaf.detach())

		MarkdownPreviewRenderer.unregisterPostProcessor(DataNoteRenderer.postprocessor)
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData())
	}

	async saveSettings() {
		await this.saveData(this.settings)
	}

	initLeaf(): void {
		if (this.app.workspace.getLeavesOfType(VIEW_TYPE_Anchor).length) {
			return
		}
		this.app.workspace.getRightLeaf(false).setViewState({
			type: VIEW_TYPE_Anchor,
		})

		if (this.app.workspace.getLeavesOfType(VIEW_TYPE_Query).length) {
		  return
		}
		this.app.workspace.getRightLeaf(false).setViewState({
		  type: VIEW_TYPE_Query,
		})

		if (this.app.workspace.getLeavesOfType(VIEW_TYPE_Template).length) {
			return
		}
		this.app.workspace.getRightLeaf(false).setViewState({
			type: VIEW_TYPE_Template,
		})

		if (this.app.workspace.getLeavesOfType(VIEW_TYPE_Data).length) {
			return
		}
		this.app.workspace.getRightLeaf(false).setViewState({
			type: VIEW_TYPE_Data,
		})

		if (this.app.workspace.getLeavesOfType(VIEW_TYPE_Pipes).length) {
			return
		}
		this.app.workspace.getRightLeaf(false).setViewState({
			type: VIEW_TYPE_Pipes,
		})

		
	  }
}



class PeculiarSetting extends PluginSettingTab {
	plugin: PeculiarPlugin

	constructor(app: App, plugin: PeculiarPlugin) {
		super(app, plugin)
		this.plugin = plugin
	}

	display(): void {
		let {containerEl} = this

		containerEl.empty()
		containerEl.createEl('h2', {text: 'Peculiar Settings'})
		
	}
}
