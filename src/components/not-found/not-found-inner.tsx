import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";

export default function NotFoundInner() {
  return (
    <div className="pt-40 pb-20 bg-background flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-9xl font-bold text-primary mb-4 font-poppins animate-bounce">404</h1>
          <h2 className="text-4xl font-semibold text-foreground mb-4 font-inter">Page Not Found</h2>
          <p className="text-lg text-grey-darker mb-8 font-inter">
            Oops! The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-secondary/90 transition-colors duration-300 font-inter"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
