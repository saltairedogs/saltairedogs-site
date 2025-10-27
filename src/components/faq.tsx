import { Section } from './section'
import { Button } from './ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

const faqs = [
  {
    question: 'Do you do solo walks?',
    answer: 'Yes—every walk is solo by default. It keeps things calmer and more focused for your dog.',
  },
  {
    question: 'Can you walk two dogs together?',
    answer:
      'Sometimes—only for dogs from the same household who already walk well together. The second dog is ~15% less than the first-dog rate.',
  },
  {
    question: 'Do you send updates?',
    answer: 'Absolutely. You’ll receive GPS tracking and photo updates after each walk.',
  },
  {
    question: "What’s your approach to care?",
    answer:
      'Friendly and positive service, with calm, reward-based handling and clear communication.',
  },
  {
    question: 'What if it rains or snows?',
    answer:
      'We walk in most weather. In heat or severe conditions we shorten or reschedule and prioritise safety.',
  },
  {
    question: 'How do keys and entry work?',
    answer:
      'We can collect keys at the meet & greet or use your key safe. Keys are coded and stored securely—no addresses on tags.',
  },
  {
    question: 'What’s your cancellation policy?',
    answer:
      'Life happens—just give us as much notice as you can. We’re flexible for genuine emergencies.',
  },
  {
    question: 'Which areas do you cover?',
    answer:
      'Saltaire & Shipley. Baildon is by enquiry if it’s a good fit for both of us.',
  },
  {
    question: 'Do you offer overnight care?',
    answer:
      'Yes—tailored, case-by-case. Usually in your home to keep routines familiar, and we can discuss alternatives if needed.',
  },
  {
    question: 'Are you taking new clients?',
    answer:
      'We keep limited daily slots so every dog gets proper attention. Get in touch and we’ll see if we’re a good fit.',
  },
]

export function FAQ() {
  return (
    <Section
      eyebrow="Got questions?"
      title="Frequently asked questions"
      description="Everything you need to know about our solo dog walking and tailored pet care."
      className="bg-[#F7F7F6] py-12 lg:py-20"
    >
      <div className="mx-auto max-w-3xl">
        {/* Panel wrapper for the accordion */}
        <div className="rounded-lg ring-1 ring-[#E6E3DA] bg-[#EFEEE9]/50 p-2 sm:p-3">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-md ring-1 ring-[#E6E3DA] bg-white px-4"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4 text-[#131415]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[15px] leading-relaxed text-[#7B828A]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-10 text-center">
          <p className="mb-4 text-sm text-[#7B828A]">
            Still have questions? We’re here to help.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-lg bg-[#C89B3C] text-[#131415] hover:opacity-90 shadow-none focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/40"
          >
            <a href="/contact">Get in touch</a>
          </Button>
        </div>
      </div>
    </Section>
  )
}
