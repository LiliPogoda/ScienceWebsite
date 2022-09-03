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

const CA = (props:any)  => {
    const [step, setStep] = React.useState(0)
    const [ruleSet, setRuleset] = React.useState(() => {
        // There are 8 possible combinations in a CA
        return Array.from({length: 8}, (x, i) => i).map(decimal => {
            return {
                code: convertToBinary(decimal),
                fill: false
            }
        })
    })

    const handleClick = (id) => {
        const newRuleSet = produceRuleSet(ruleSet, (newRuleSet) => {
            newRuleSet[id].fill = !newRuleSet[id].fill
        });
        setRuleset(newRuleSet);
    }

    const handleEvolve = () => {
        let step = 0
        while (step <= 9) {
            const rowCurrent = document.querySelectorAll(`div[id^="r${step+1}-"]`);
            const rowPrev = Array.from(document.querySelectorAll(`div[id^="r${step}-"]`))  as any as Array<HTMLDivElement>;
            rowCurrent.forEach((cell, idx) => {
                const leftNeighbor = idx === 0 ? rowPrev.slice(-1)[0] : rowPrev[idx-1];
                const rightNeighbor = idx === 9 ? rowPrev[0] : rowPrev[idx+1];
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
        }
    }

    const RuleCard = (rule: {code:string, fill:boolean, id: number}) => {
        return (<Paper elevation={3}  style={{width: 150, height: 147}}>
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
                <div style={{marginLeft: "auto", marginRight: "auto"}} onClick={() => handleClick(rule.id)}>
                    {rule.fill ? <BlackBox /> : <WhiteBox/>}
                </div>
            </Stack>
        </Paper>)
    }

    const Automaton = () => {
        return (
          <Paper elevation={3} sx={{ width: "max-content" }}>
            <Stack spacing={0}>
              {Array.from({length: 10}, (x, i) => i).map(row => (
                <Grid key={`r${row}`} container spacing={0}>
                    {Array.from({length: 10}, (x, i) => i).map(col => (
                        <Grid item key={`r${row}-c${col}`}>
                            <WhiteBox small props={{id: `r${row}-c${col}`}} />
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

const smallDim = "10px"
const largeDim = "50px"

const BlackBox = ({props={}, small=false}) => {
    return <Paper 
    variant="outlined" 
    square 
    style={{
        backgroundColor: "black",
        width: small ? smallDim : largeDim,
        height: small ? smallDim : largeDim
    }} 
    {...props}
    />
}

const WhiteBox = ({props={}, small=false}) => {
    return <Paper 
    variant="outlined" 
    square 
    style={{
        width: small ? smallDim : largeDim,
        height: small ? smallDim : largeDim
    }}
    {...props} 
    />
}

const produceRuleSet = (ruleSet, callback) => {
    const newRuleSet = JSON.parse(JSON.stringify(ruleSet));
    callback(newRuleSet);
    return newRuleSet;
};



export default CA