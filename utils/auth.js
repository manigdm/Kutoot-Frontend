export default function auth() {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');
      if (token) {
        const authData = { access_token: token };
        localStorage.setItem("auth", JSON.stringify(authData));
  
        const url = new URL(window.location.href);
        url.searchParams.delete("token");
        window.history.replaceState({}, document.title, url.pathname);
  
        return { token };
      }
  
      const stored = localStorage.getItem("auth");
      if (stored) {
        return JSON.parse(stored);
      }
  
      return false;
    }
  
    return false;
  }