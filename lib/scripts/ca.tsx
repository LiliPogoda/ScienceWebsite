import * as React from "react"
import {
    Grid,
    Paper,
    Stack,
    Button
  } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const numRows = 21
const numCols = 21

// Possible combinations of a cell neighborhood
const numPerturbs = 8

const ruleDim = "50px";
const cellDim = "20px";

const CA = ()  => {
    // Represents how the CA should be updated at each step
    const [ruleSet, setRuleset] = React.useState(() => {
        // There are 8 possible combinations in a CA
        return Array.from({length: numPerturbs}, (x, i) => i).map(decimal => {
            return {
                code: convertToBinary(decimal),
                fill: false
            }
        })
    })

    /**
     * Handle the setup of the initial CA state by changing the clicked cell color
     */
    const handleInitClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.currentTarget.style.backgroundColor === "black") {
            event.currentTarget.style.backgroundColor = "white";
        } else {
            event.currentTarget.style.backgroundColor = "black";
        }
    }

    /**
     * Changes the rule of the given ID to the opposite outcome
     * @param id The ID of the rule that should be adjusted
     */
    const handleRuleChange = (id:number) => {
        const newRuleSet = produceRuleSet(ruleSet, (newRuleSet) => {
            newRuleSet[id].fill = !newRuleSet[id].fill
        });
        setRuleset(newRuleSet);
    }

    /**
     * Evolve the CA over time.
     */
    const handleEvolve = async () => {
        let step = 0
        while (step < numRows) {
            const rowCurrent = document.querySelectorAll(`div[id^="r${step+1}-"]`);
            const rowPrev = Array.from(document.querySelectorAll(`div[id^="r${step}-"]`))  as any as Array<HTMLDivElement>;
            rowCurrent.forEach((cell, idx) => {
                const leftNeighbor = idx === 0 ? rowPrev.slice(-1)[0] : rowPrev[idx-1];
                const rightNeighbor = idx === numCols-1 ? rowPrev[0] : rowPrev[idx+1];
                const lFill = leftNeighbor.style.backgroundColor === 'black';
                const rFill = rightNeighbor.style.backgroundColor === 'black';
                const cFill = rowPrev[idx].style.backgroundColor === 'black';
                if (!lFill && !cFill && !rFill) {
                    // 000
                    if (ruleSet[0].fill) {
                      (
                        rowCurrent[idx] as HTMLDivElement
                      ).style.backgroundColor = "black";
                    }
                } else if (!lFill && !cFill && rFill) {
                    // 001
                    if (ruleSet[1].fill) {
                      (
                        rowCurrent[idx] as HTMLDivElement
                      ).style.backgroundColor = "black";
                    }
                } else if (!lFill && cFill && !rFill) {
                    // 010
                    if (ruleSet[2].fill) {
                      (
                        rowCurrent[idx] as HTMLDivElement
                      ).style.backgroundColor = "black";
                    }
                } else if (!lFill && cFill && rFill) {
                    // 011
                    if (ruleSet[3].fill) {
                      (
                        rowCurrent[idx] as HTMLDivElement
                      ).style.backgroundColor = "black";
                    }
                } else if (lFill && !cFill && !rFill) {
                    // 100
                    if (ruleSet[4].fill) {
                    (rowCurrent[idx] as HTMLDivElement).style.backgroundColor =
                        "black";
                    }
                } else if (lFill && !cFill && rFill) {
                    // 101
                    if (ruleSet[5].fill) {
                      (
                        rowCurrent[idx] as HTMLDivElement
                      ).style.backgroundColor = "black";
                    }
                } else if (lFill && cFill && !rFill) {
                    // 110
                    if (ruleSet[6].fill) {
                      (
                        rowCurrent[idx] as HTMLDivElement
                      ).style.backgroundColor = "black";
                    }
                } else if (lFill && cFill && rFill) {
                    // 111
                    if (ruleSet[7].fill) {
                      (
                        rowCurrent[idx] as HTMLDivElement
                      ).style.backgroundColor = "black";
                    }
                }
            })
            step++;
            if (step < numRows) {
                const row = document
                  .querySelector(`div[id=r${step}]`)
                row.classList.remove("hidden")
                row.classList.add("animated", "fadeInDown");
            }  
            await sleep(500)          
        }
    }

    /**
     * Visualize the given rule through HTML
     */
    const RuleCard = (rule: {code:string, fill:boolean, id: number}) => (
        <Paper elevation={3}  style={{width: 150, height: 149}}>
            <Stack spacing={0}>
                <Grid container spacing={0}>
                    {rule.code.split("").map((val, idx) => (
                        <Grid item key={`${rule}-${idx}`}>
                            <Cell filled={val === "1"}/>
                        </Grid>
                    ))}
                </Grid>
                <div style={{marginLeft: "auto", marginRight: "auto"}}>
                    <ArrowDownwardIcon sx={{ fontSize: 40}} />
                </div>
                <div style={{marginLeft: "auto", marginRight: "auto"}} onClick={() => handleRuleChange(rule.id)}>
                    <Cell filled={rule.fill}/>
                </div>
            </Stack>
        </Paper>
    )

    /**
     * Generates the CA as JSX.
     */
    const Automaton = () => (
          <Paper elevation={3} sx={{ width: "max-content" }}>
            <Stack spacing={0}>
              {Array.from({ length: numRows }, (x, i) => i).map((row) => (
                <Grid
                  key={`r${row}`}
                  id={`r${row}`}
                  className={row === 0 ? "" : "hidden"}
                  container
                  spacing={0}
                >
                  {Array.from({ length: numCols }, (x, i) => i).map((col) => (
                    <Grid item key={`r${row}-c${col}`}>
                        <Cell 
                            filled={row===0 && col===Math.floor(numCols/2)} 
                            small 
                            props={{ id: `r${row}-c${col}`, onClick: handleInitClick}} 
                        />
                    </Grid>
                  ))}
                </Grid>
              ))}
            </Stack>
          </Paper>
    );

    return (<>
        <Grid container spacing={1}>
            {ruleSet.map((rule, idx) => (
                <Grid item  key={`${rule.code}`}>
                    <RuleCard code={rule.code} fill={rule.fill} id={idx}/>
                </Grid>
            ))}
        </Grid>
        <Automaton />
        <Button onClick={handleEvolve}>Run</Button>
    </>)
}

/**
 * generate a binary string from a given number. If the binary string
 * is shorter than three digits, fills up with leading zeros
 * @param x The decimal number to convert
 */
const convertToBinary = (x:number): string => {
    let bin = 0;
    let rem, i = 1
    while (x != 0) {
        rem = x % 2;
        x = parseInt((x / 2).toString());
        bin = bin + rem * i;
        i = i * 10;
    }
    let result = bin.toString()
    while(result.split("").length < 3) {
        result = "0" + result 
    }
    return result
}

/**
 * Generates a CA cell JSX Element
 */
const Cell = ({ props = {}, small = false, filled = false }) => (
  <Paper
    variant="outlined"
    square
    style={{
      backgroundColor: filled ? "black" : "white",
      width: small ? cellDim : ruleDim,
      height: small ? cellDim : ruleDim,
    }}
    {...props}
  />
);

/**
 * Helper function to update the ruleset. Avoids mutating the state variable directly by making
 * a copy of the ruleset, mutating the copy and then setting the copy as the new ruleset
 * @param ruleSet - The current ruleset
 * @param callback - function that is supposed to mutate the ruleset
 * @returns The mutated ruleset
 */
const produceRuleSet = (ruleSet, callback) => {
    const newRuleSet = JSON.parse(JSON.stringify(ruleSet));
    callback(newRuleSet);
    return newRuleSet;
};

/**
 * Creates an awaitable promise that auto resolves after the given <ms> time.
 */
const sleep = (ms:number)=> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}



export default CA