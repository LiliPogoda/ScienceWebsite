import * as React from "react"
import {
    CardMedia,
    Typography,
    Grid,
    Paper,
    Stack,
    Button
  } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const numRows = 20
const numCols = 20

// Possible combinations of a cell neighborhood
const numPerturbs = 8

const ruleDim = "50px";
const cellDim = "20px";

const CA = (props:any)  => {
    const [ruleSet, setRuleset] = React.useState(() => {
        // There are 8 possible combinations in a CA
        return Array.from({length: numPerturbs}, (x, i) => i).map(decimal => {
            return {
                code: convertToBinary(decimal),
                fill: false
            }
        })
    })

    const handleInitClick = (event) => {
        if (event.currentTarget.style.backgroundColor === "black") {
            event.currentTarget.style.backgroundColor = "white";
        } else {
            event.currentTarget.style.backgroundColor = "black";
        }
    }

    const handleRuleChange = (id) => {
        const newRuleSet = produceRuleSet(ruleSet, (newRuleSet) => {
            newRuleSet[id].fill = !newRuleSet[id].fill
        });
        setRuleset(newRuleSet);
    }

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

    const RuleCard = (rule: {code:string, fill:boolean, id: number}) => {
        return (<Paper elevation={3}  style={{width: 150, height: 149}}>
            <Stack spacing={0}>
                <Grid container spacing={0}>
                    {rule.code.split("").map((val, idx) => (
                        <Grid item key={`${rule}-${idx}`}>
                            {val === "1" ? <BlackBox /> : <WhiteBox />}
                        </Grid>
                    ))}
                </Grid>
                <div style={{marginLeft: "auto", marginRight: "auto"}}>
                    <ArrowDownwardIcon sx={{ fontSize: 40}} />
                </div>
                <div style={{marginLeft: "auto", marginRight: "auto"}} onClick={() => handleRuleChange(rule.id)}>
                    {rule.fill ? <BlackBox /> : <WhiteBox/>}
                </div>
            </Stack>
        </Paper>)
    }

    const Automaton = () => {
        return (
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
                      <WhiteBox small props={{ id: `r${row}-c${col}`, onClick: handleInitClick}} />
                    </Grid>
                  ))}
                </Grid>
              ))}
            </Stack>
          </Paper>
        );
    }

    return (<>
        <Grid container spacing={1}>
            {ruleSet.map((rule, idx) => (
                <Grid item  key={`${rule.code}`}><RuleCard code={rule.code} fill={rule.fill} id={idx}/></Grid>
            ))}
        </Grid>
        <Automaton />
        <Button onClick={handleEvolve}>Run</Button>
    </>)
}

function convertToBinary(x:number) {
    let bin = 0;
    let rem, i = 1, step = 1;
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

const BlackBox = ({props={}, small=false}) => {
    return <Paper 
    variant="outlined" 
    square 
    style={{
        backgroundColor: "black",
        width: small ? cellDim : ruleDim,
        height: small ? cellDim : ruleDim
    }} 
    {...props}
    />
}

const WhiteBox = ({props={}, small=false}) => {
    return <Paper 
    variant="outlined" 
    square 
    style={{
        width: small ? cellDim : ruleDim,
        height: small ? cellDim : ruleDim
    }}
    {...props} 
    />
}

const produceRuleSet = (ruleSet, callback) => {
    const newRuleSet = JSON.parse(JSON.stringify(ruleSet));
    callback(newRuleSet);
    return newRuleSet;
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
}



export default CA