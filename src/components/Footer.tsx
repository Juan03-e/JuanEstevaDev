
const Footer = () => {
    return (
        <footer className="py-6 border-t border-border/50">
            <div className="container mx-auto px-6 text-center text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Juan Pablo Esteva. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
