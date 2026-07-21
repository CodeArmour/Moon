import { MessageCircle, Phone } from "lucide-react";
import { contact } from "@/data/site";
export function MobileContact() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 grid grid-cols-2 overflow-hidden shadow-2xl lg:hidden">
      <a
        className="flex items-center justify-center gap-2 bg-[#d6a32d] py-3 text-xs font-bold text-[#061b36]"
        href={contact.whatsapp}
      >
        <MessageCircle size={17} />
        WhatsApp
      </a>
      <a
        className="flex items-center justify-center gap-2 bg-[#061b36] py-3 text-xs font-bold text-white"
        href={contact.phoneHref}
      >
        <Phone size={17} />
        Call us
      </a>
    </div>
  );
}
