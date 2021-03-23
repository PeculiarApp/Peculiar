<script>
    import {FileManager} from "obsidian"

    // Font Awesome Icon Name
    export let name = "circle"
    // Color: Hex or Name
    export let color = "#ffffff"
    // Sizes: xs(1), sm(2), lg(3), 2x(4), 3x(5), 5x(6), 7x(7), 10x(8)
    export let size = "5px"
    // Type: brand, solid, regular
    export let type = "regular"

    let iconStyle=`fill:${ color };width:${ size };height:${ size };`
    let iconLocation = `C:\\Icons\\${ type.toLowerCase() }\\${ name }.svg`
</script>

<img 
    src={ iconLocation }
    alt={ name + " Icon" } 
    style={ iconStyle }>