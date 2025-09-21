import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "15551234567"; // Replace with actual WhatsApp business number
    const message = "Hi! I'm interested in your construction services. Could you provide me with more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
        style={{ backgroundColor: '#25D366' }}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="ml-2 hidden sm:inline">Chat with us!</span>
      </Button>
    </div>
  );
};

export default WhatsAppFloat;