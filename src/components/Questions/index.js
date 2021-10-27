import React from "react";
import CollectedQuestions from "./colledtedquestions";
import "./question.css";
const Question = () => {
  return (
    <div className="Collection__EntireBox">
      <div className="centeringDivOps">
        <h2 className="Frequency__Lottery">FREQUENTLY ASKED QUESTIONS</h2>
        <h5 className="Frequency__Texted">
          You have questions, and we have answers. Couldn't find an anwser? Hop
          in our Discord Community!
        </h5>
      </div>
      <CollectedQuestions
        text="Cute, soft and slow VERY slow, sloths are very cool animals but sadly they are endangered by humans, from illegal trade to deforestation, and we want to raise awareness on them."
        headText="Why Slothz?"
      />
      <CollectedQuestions
        headText="What is Minting Process"
        text="Tokens will be minted through a blind and random mint using our in-house script (open source and proof of hashes). No FOMO ramp & flat pricing. Minters can get up to 20 at a time."
      />
      <CollectedQuestions
        headText="Tell us more about the SLOTHz !"
        text="Every Sloth is randomly generated with a different amount of traits specifically designed to look as good as possible with well designed accessories and meeting high standards of quality and randomness."
      />
      <CollectedQuestions
        headText="What about the real slothz?"
        text="A portion of minting proceeds will go to supporting the Sloth Conservation Foundation that protects sloths in the wild through research and conservation initiatives. Each donation will be publicly available and unlocked after every milestone we hit on our roadmap."
      />
      <CollectedQuestions
        headText="Sir wen SLOTHz?"
        text="We're finishing some things up but watch for updates and keep your wallets loaded, SLOTHz are launching very soon at just 0.045 ETH each."
      />
      <CollectedQuestions
        headText="Sir wen SLOTHz?"
        text="We're finishing some things up but watch for updates and keep your wallets loaded, SLOTHz are launching very soon at just 0.045 ETH each."
      />
      <CollectedQuestions
        headText="Treasure hunt?"
        text="The challenge is not active (YET) but we recommend following us on twitter, it's a special challenge for our community members, remember you need to have at least 1 SLOTH on your wallet to claim the treasure."
      />
      <CollectedQuestions
        headText="How many Slothz are being kept?"
        text="We're keeping 200 SLOTHz for random giveaways, partnerships and we would love to keep some. Every holding, partnership and giveaway will be publicly disclosed."
      />
      <CollectedQuestions
        headText="Is your contract public ?"
        text="Yes, of course! You can inspect our contract here."
      />
    </div>
  );
};

export default Question;
