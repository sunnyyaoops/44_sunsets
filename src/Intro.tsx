import { useLocation } from "wouter";
import { Button, Container } from "react-bootstrap";
import { UniverseContainer } from "./universeContainer/UniverseContainer";
export const Intro: React.FC = () => {
  const [, navigate] = useLocation();
  return (
    <UniverseContainer>
      <Container
        className="overflow-scroll"
        style={{ maxHeight: "80%", maxWidth: "72%" }}
      >
        <figure>
          <blockquote className="blockquote">
            <p className="text-light h5 lh-lg mb-4">
              For a long time you had found your only entertainment in the quiet
              pleasure of looking at the sunset. I learned that new detail on
              the morning of the fourth day, when you said to me: <br />
              "I am very fond of sunsets. Come, let us go look at a sunset now."
              <br />
              "But we must wait," I said. <br />
              "Wait? For what?" <br />
              "For the sunset. We must wait until it is time." <br />
              At first, you seemed to be very much surprised. And then you
              laughed to yourself. You said to me: <br />
              "I am always thinking that I am at home!"
              <br />
              Just so. Everybody knows that when it is noon in the United States
              the sun is setting over France. <br />
              If you could fly to France in one minute, you could go straight
              into the sunset, right from noon. Unfortunately, France is too far
              away for that. But on your tiny planet, my little prince, all you
              need do is move your chair a few steps. You can see the day end
              and the twilight falling whenever you like... <br />
            </p>
            <figcaption className="blockquote-footer text-light lh-lg text-end">
              Antoine de Saint-Exupéry,{" "}
              <cite title="The Little Prince">The Little Prince</cite>
            </figcaption>
          </blockquote>
        </figure>
        <Button
          variant="light"
          className="mt-3 w-100"
          onClick={() => navigate("/departure")}
        >
          Come, let us go look at a sunset now!
        </Button>
      </Container>
    </UniverseContainer>
  );
};
