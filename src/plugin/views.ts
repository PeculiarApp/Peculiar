import { ItemView, WorkspaceLeaf } from "obsidian"

import { 
	VIEW_TYPE_Query,
	VIEW_TYPE_Template,
	VIEW_TYPE_Data,
	VIEW_TYPE_Pipes,
	VIEW_TYPE_Anchor
} from "./constants"

import type PeculiarPlugin from "./main"
import Query from './views/Query.svelte'
import Pipe from './views/Pipe.svelte'
import Templates from './views/Templates.svelte'
import Data from './views/Data.svelte'
import Anchor from './views/Anchor.svelte'


export class AnchorView extends ItemView {
    private _app: Anchor

    constructor(leaf: WorkspaceLeaf, private plugin: PeculiarPlugin) {
        super(leaf)
    }

    getViewType(): string {
        return VIEW_TYPE_Anchor
    }

    getDisplayText(): string {
        return "Anchors"
    }

    getIcon(): string {
        return "pin"
    }

    private getProps() {
        return {
            app: this.app
        }
    }

    async onOpen() {
        this._app = new Anchor({
            target: (this as any).contentEl,
            props: this.getProps(),
        })

        this.registerEvent(
            this.app.metadataCache.on("resolve", (...args) => {
                this.rerender()
            })
        )
    }
        
    rerender() {
        this._app.$set(this.getProps())
    }
    
    
}

export class QueryView extends ItemView {
    private _app: Query

    constructor(leaf: WorkspaceLeaf, private plugin: PeculiarPlugin) {
        super(leaf)
    }

    getViewType(): string {
        return VIEW_TYPE_Query
    }

    getDisplayText(): string {
        return "Queries"
    }

    getIcon(): string {
        return "search"
    }

    private getProps() {
        return {
            app: this.app
        }
    }

    async onOpen() {
        this._app = new Query({
            target: (this as any).contentEl,
            props: this.getProps(),
        })

        this.registerEvent(
            this.app.metadataCache.on("resolve", (...args) => {
                this.rerender()
            })
        )
    }
        
    rerender() {
        this._app.$set(this.getProps())
    }
    
    
}

export class TemplateView extends ItemView {
    private _app: Templates

    constructor(leaf: WorkspaceLeaf, private plugin: PeculiarPlugin) {
        super(leaf)
    }
    
    getViewType(): string {
        return VIEW_TYPE_Template
    }

    getDisplayText(): string {
        return "Templates"
    }

    getIcon(): string {
        return "documents"
    }

    private getProps() {
        return {
            app: this.app,
        }
    }

    async onOpen() {
        this._app = new Templates({
            target: (this as any).contentEl,
            props: this.getProps(),
        })

        this.registerEvent(
            this.app.metadataCache.on("resolve", (...args) => {
                this.rerender()
            })
        )
    }
        
    rerender() {
        this._app.$set(this.getProps())
    }
}

export class PipeView extends ItemView {
    private _app: Pipe

    constructor(leaf: WorkspaceLeaf, private plugin: PeculiarPlugin) {
        super(leaf)
    }
    
    getViewType(): string {
        return VIEW_TYPE_Data
    }

    getDisplayText(): string {
        return "Pipes"
    }

    getIcon(): string {
        return "dot-network"
    }

    private getProps() {
        return {
            app: this.app,
        }
    }

    async onOpen() {
        this._app = new Pipe({
            target: (this as any).contentEl,
            props: this.getProps(),
        })

        this.registerEvent(
            this.app.metadataCache.on("resolve", (...args) => {
                this.rerender()
            })
        )
    }
        
    rerender() {
        this._app.$set(this.getProps())
    }
}

export class DataView extends ItemView {
    private _app: Data

    constructor(leaf: WorkspaceLeaf, private plugin: PeculiarPlugin) {
        super(leaf)
    }
    
    getViewType(): string {
        return VIEW_TYPE_Pipes
    }
    
    getDisplayText(): string {
        return "Data"
    }

    getIcon(): string {
        return "blocks"
    }

    private getProps() {
        return {
            app: this.app,
        }
    }

    async onOpen() {
        this._app = new Data({
            target: (this as any).contentEl,
            props: this.getProps(),
        })

        this.registerEvent(
            this.app.metadataCache.on("resolve", (...args) => {
                this.rerender()
            })
        )
    }
        
    rerender() {
        this._app.$set(this.getProps())
    }
}

