class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
            <div class="site-footer">
                <div class="container">
                    <div class="row mt-5">
                        <div class="col-12 text-center">
                            <p class="mb-0">
                                Copyright <b>&copy;${new Date().getFullYear()} 
                                <span class="text-primary">Lampl</span><span class="text-secondary">Net</span></b> (Edgar Lampl)<br>
                                Danke an <a href="https://untree.co">Untree.co</a> | <a href="impressum">Impressum</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

  }
  
  customElements.define('footer-copyright', Footer);
