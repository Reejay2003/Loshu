// src/components/ui/Analysis.tsx

interface AnalysisProps {
    loshuGrid: Record<number, number[]>;
  }
  
  export default function Analysis({ loshuGrid }: AnalysisProps) {
    // Helper function to check number of times a digit appears
    const getDigitCount = (num: number) => {
      return loshuGrid[num]?.length || 0;
    };
  
    // Helper function to check if a combination of numbers exists in the grid
    const hasCombination = (combo: number[]) => {
      return combo.every((num) => getDigitCount(num) > 0); // Check if all numbers in the combination exist in the grid
    };
  
    // Check for individual number analysis
    const getNumberAnalysis = (num: number) => {
      let count = getDigitCount(num);
      if (count > 3) count = count % 3; // Handle case where numbers appear more than 3 times
      let description = "";
  
      if (count === 1) {
        switch (num) {
          case 4:
            description = "4: Great wealth accumulation and skill at some work.";
            break;
          case 9:
            description = "9: Aggression and philanthropy.";
            break;
          case 2:
            description = "2: Sensitivity and good relations to family.";
            break;
          case 3:
            description = "3: Educated mind.";
            break;
          case 5:
            description = "5: Balancing life.";
            break;
          case 7:
            description = "7: Intuition.";
            break;
          case 8:
            description = "8: Hardworking and karma alignment.";
            break;
          case 1:
            description = "1: Communication power and materialistic desires.";
            break;
          case 6:
            description = "6: Luxury in life and love life.";
            break;
          default:
            break;
        }
      } else if (count === 2) {
        switch (num) {
          case 1:
            description = "1: Abundant communication – you will be very communicative, which can help in networking and expressing yourself, but can also make you talk too much.";
            break;
          case 6:
            description = "6: Abundant love and luxury – great quality of love and life, but can sometimes lead to indulgence and excessiveness.";
            break;
          case 4:
            description = "4: Very skilled and financially secure, but the focus on work might make you less social.";
            break;
          case 9:
            description = "9: High empathy and social causes – you might find yourself getting emotionally attached to different causes.";
            break;
          case 2:
            description = "2: Deep emotional connection to family – you will likely have close and supportive family relationships.";
            break;
          case 3:
            description = "3: Very educated and mentally sharp, but sometimes overly intellectual.";
            break;
          case 5:
            description = "5: Strong balance in life – you can adapt well to changes, though sometimes you may lack focus.";
            break;
          case 7:
            description = "7: Strong intuition – you trust your gut feeling, but may sometimes overanalyze situations.";
            break;
          case 8:
            description = "8: Hardworking with a strong sense of responsibility – you may sometimes get stuck in work and neglect personal life.";
            break;
          default:
            break;
        }
      } else if (count === 3) {
        switch (num) {
          case 1:
            description = "1: Too much communication – excessive talking might make you appear overpowering or even annoying.";
            break;
          case 6:
            description = "6: Too much luxury and love – you may indulge too much in material things or relationships, leading to imbalance.";
            break;
          case 4:
            description = "4: Too much focus on work – you might lose out on the social aspects of life, and other important areas may be neglected.";
            break;
          case 9:
            description = "9: Too much empathy – you may become emotionally drained from trying to help everyone around you.";
            break;
          case 2:
            description = "2: Too much sensitivity – you may become overly emotional or insecure.";
            break;
          case 3:
            description = "3: Overly intellectual – you may overthink and struggle with decision-making due to overanalyzing.";
            break;
          case 5:
            description = "5: Too much balance – you may become indecisive or lack commitment.";
            break;
          case 7:
            description = "7: Over-analysis – your strong intuition could sometimes make you overly cautious or suspicious.";
            break;
          case 8:
            description = "8: Overworking – your focus on work and material success might result in burnout or neglect of personal life.";
            break;
          default:
            break;
        }
      }
  
      return description;
    };
  
    // Check for combinations
    const getCombinationAnalysis = () => {
      const combinations = [
        { nums: [4, 9, 2], description: "Mental mastery (decisions from mind)." },
        { nums: [3, 5, 7], description: "Emotional mastery (decisions from heart)." },
        { nums: [8, 1, 6], description: "Practical and overanalyzing (both heart and mind decision maker)." },
        { nums: [4, 3, 8], description: "Vision of future." },
        { nums: [9, 5, 1], description: "High will power." },
        { nums: [2, 7, 6], description: "Action oriented and never shy from trying new things." },
        { nums: [4, 5, 6], description: "Golden Raj Yog." },
        { nums: [2, 5, 8], description: "Silver Raj Yog." },
      ];
  
      return combinations.filter((combo) => hasCombination(combo.nums)).map((combo) => combo.description);
    };
  
    // Collect the individual number analysis
    const individualAnalysis = Object.keys(loshuGrid)
      .map((key) => parseInt(key))
      .map((num) => getNumberAnalysis(num));
  
    // Collect the combination analysis
    const combinationAnalysis = getCombinationAnalysis();
  
    return (
      <div className="p-4 border rounded-lg space-y-4">
        <h2 className="text-xl font-bold">Numerology Analysis</h2>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Individual Number Analysis</h3>
          {individualAnalysis.map((desc, idx) => (
            <p key={idx}>{desc}</p>
          ))}
        </div>
  
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Combination Analysis</h3>
          {combinationAnalysis.length > 0 ? (
            combinationAnalysis.map((desc, idx) => <p key={idx}>{desc}</p>)
          ) : (
            <p>No relevant combinations found.</p>
          )}
        </div>
      </div>
    );
  }
  