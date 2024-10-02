import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import YouTube from 'react-youtube';

export function AccordionComponent({ items }: { items: Record<string, string>[]}) {
  return (
    <Accordion collapseAll className="w-full">
      {items.map((item) => (
        <AccordionPanel key={item.title}>
          <AccordionTitle>{item.title}</AccordionTitle>
          <AccordionContent>
            {/* Agrega la imagen aquí */}
            {item.image && <img src={item.image} alt={`Imagen de ${item.title}`} className="w-32 h-32 object-cover mb-4" />}
            <p>{item.content}</p>
            {item.video && <YouTube videoId={item.video}/>}
          </AccordionContent>
        </AccordionPanel>
      ))}
    </Accordion>
  );
}
