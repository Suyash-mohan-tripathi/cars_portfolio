class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
        }
        .logo-icon {
          margin-right: 0.5rem;
        }
        ul {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          font-weight: 500;
        }
        a:hover {
          color: #3a86ff;
        }
        .nav-icon {
          margin-right: 0.5rem;
          width: 18px;
          height: 18px;
        }
        @media (max-width: 768px) {
          nav {
            flex-direction: column;
            padding: 1rem;
          }
          ul {
            margin-top: 1rem;
            gap: 1rem;
          }
        }
      </style>
      <nav>
        <div class="logo">
          <i data-feather="car" class="logo-icon"></i>
          CarVista 360°
        </div>
        <ul>
          <li><a href="/"><i data-feather="home" class="nav-icon"></i> Home</a></li>
          <li><a href="/gallery.html"><i data-feather="image" class="nav-icon"></i> Gallery</a></li>
          <li><a href="/about.html"><i data-feather="info" class="nav-icon"></i> About</a></li>
        </ul>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);