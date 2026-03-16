const Footer = () => {
  return (
    <footer className="border-t border-border/50 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-sm font-bold text-foreground">
          Harvey Lacdo-o<span className="text-primary"></span>
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Harvey Lacdo-o. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
