function Footer() {
    return <footer className="page-footer red darken-1">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Пушин Алексей
                <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
        </div>
    </footer>
}
export { Footer };