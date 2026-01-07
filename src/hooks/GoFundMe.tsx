import { useEffect, useRef } from "react";

const GoFundMe: React.FC = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to initialize the widget
    const initWidget = () => {
      // @ts-ignore
      if ((window as any).GoFundMe?.embed && widgetRef.current) {
        // @ts-ignore
        (window as any).GoFundMe.embed();
      }
    };

    // Check if script already exists
    let script = document.querySelector(
      'script[src="https://www.gofundme.com/static/js/embed.js"]'
    ) as HTMLScriptElement | null;

    if (!script) {
      // Create script if it doesn’t exist
      script = document.createElement("script");
      script.src = "https://www.gofundme.com/static/js/embed.js";
      script.async = true;
      script.onload = initWidget;
      document.body.appendChild(script);
    } else {
      // Script already loaded → manually initialize
      initWidget();
    }
  }, []);

  return (
    <div
      ref={widgetRef}
      className="gfm-embed"
      data-url="https://www.gofundme.com/f/support-ru-bots-autonomous-food-delivery/widget/medium"
    />
  );
};

export default GoFundMe;
