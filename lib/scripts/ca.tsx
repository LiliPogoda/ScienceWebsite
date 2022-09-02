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
    const [ruleSet, setRuleset] = React.useState(() => {
        // There are 8 possible combinations in a CA
        return Array.from({length: 8}, (x, i) => i).map(decimal => {
            return {
                code: convertToBinary(decimal),
                fill: false
            }
        })
    })
    const [grid, setGrid] = React.useState(() => {
        const numRows = 50;
        const numCols = 50;
        const rows = []
        for (let i = 0; i<numRows; i++) {
            const row = []
            for (let j = 0; j<numCols; j++) {
                row.push(false)
            }
            rows.push(row)
        }
        return rows
    })

    const handleClick = (id) => {
        const newRuleSet = produceRuleSet(ruleSet, (newRuleSet) => {
            newRuleSet[id].fill = !newRuleSet[id].fill
        });
        setRuleset(newRuleSet);
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
            <Paper elevation={3} sx={{width: "max-content"}}>
                <Stack spacing={0}>
                    {grid.map((row, rIdx) => (
                        <Grid key={`r${rIdx}`} container spacing={0}>
                            {row.map((cellFilled, cIdx) => (
                                <Grid item key={`r${rIdx}-c${cIdx}`}>
                                    {cellFilled ? <BlackBox  small={true}/> : <WhiteBox small={true} />}
                                </Grid>
                            ))}
                        </Grid>
                    ))}
                </Stack>
            </Paper>
        )
    }

    return (<>
        <Grid container spacing={1}>
            {ruleSet.map((rule, idx) => (
                <Grid item  key={`${rule.code}`}><RuleCard code={rule.code} fill={rule.fill} id={idx}/></Grid>
            ))}
        </Grid>
        <Automaton />
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

const produceGrid = (grid, callback) => {
    const newGrid = JSON.parse(JSON.stringify(grid));
    callback(newGrid);
    return newGrid;
};

export default CA