class StyleSheet {
    styleSheet: any
    constructor(name = 'dynamic-styleSheet') {
      this.styleSheet = this.getStyleSheet(name)
    }
  
    getStyleSheet(name) {
        const SSR = typeof window === "undefined";
        if (SSR) {
            return "";
        }
      if (!document.getElementById(name)) {
        const style = document.createElement('style')
        style.title = name
        document.getElementsByTagName('head')[0].appendChild(style)
      }
  
      let styleSheet = null
      for (let i = 0; i < document.styleSheets.length; i++) {
        styleSheet = document.styleSheets[i]
        if (styleSheet.title === name) {
          break
        }
      }
      return styleSheet
    }
    insertRule(css, index) {
        const SSR = typeof window === "undefined";
        if (SSR) {
            return "";
        }
      return this.styleSheet.insertRule(css, index)
    }
    deleteRule(index) {
        const SSR = typeof window === "undefined";
        if (SSR) {
            return "";
        }
      this.styleSheet.deleteRule(index)
    }
  }
  export default StyleSheet
  // let styleSheet = new StyleSheet ()
  // styleSheet.insertRule('h1{color:red;}', 0)