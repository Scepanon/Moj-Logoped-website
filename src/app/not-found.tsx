import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center py-20">
      <Container className="text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-semibold text-secondary-900 mb-4">
          Stranica nije pronađena
        </h1>
        <p className="text-secondary-500 text-lg mb-8 max-w-md mx-auto">
          Stranica koju tražite možda je uklonjena ili adresa nije ispravna.
        </p>
        <Button href="/">Vrati se na početnu</Button>
      </Container>
    </main>
  );
}
