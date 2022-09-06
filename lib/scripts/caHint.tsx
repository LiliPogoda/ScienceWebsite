import * as React from "react"
import {Cell} from "./ca"
import {
    Grid,
    Stack,
    Typography,
    Button,
    Paper
  } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Carousel from 'react-material-ui-carousel'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';


const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
<Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
[`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 290,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
},
}));

export default function CAHint() {
    const [show, setShow] = React.useState(false)
    return (<>
        <HtmlTooltip
            open={show}
            onMouseEnter={() => setShow(true)}
            title={
            <React.Fragment>
                <Stack>
                    <IconButton 
                        color="primary" 
                        id="closePopover"
                        aria-label="close popover" 
                        onClick={() => setShow(false)} 
                        sx={{width: "max-content", marginLeft: "auto"}}
                    >
                        <CloseIcon sx={{fontSize: 20}}/>
                    </IconButton>
                    <Typography 
                        sx={{textAlign: "center", fontSize: 16}}
                        color="inherit"
                    >
                        Try out the following combinations of rules on the cards above 
                        - Can you predict what will happen?
                    </Typography>
                    <Carousel
                        IndicatorIcon={<HorizontalRuleIcon/>}
                        animation="fade" 
                        navButtonsAlwaysVisible
                        interval={8000}
                        autoPlay={false}
                    >
                        <Stack 
                            sx={{
                                width: "max-content",
                                marginLeft: "auto",
                                marginRight: "auto"
                            }}
                        >
                            {[[false, true, true, true], [true, false, false, false]].map((row, idx) => (
                                <Grid key={`rule30-row${idx}`}container>
                                    {row.map((fill, colIdx) => (
                                        <Grid 
                                            key={`rule30-${colIdx}`} 
                                            item 
                                            sx={{marginRight: "1px", marginBottom: "1px"}}
                                        >
                                            <Cell filled={fill}/>
                                        </Grid>
                                    ))}
                                </Grid>
                            ))}
                        </Stack>
                        <Stack 
                            sx={{
                                width: "max-content",
                                marginLeft: "auto",
                                marginRight: "auto"
                            }}
                        >
                            {[[false, true, false, true], [true, false, true, false]].map((row, idx) => (
                                <Grid key={`rule30-row${idx}`}container>
                                    {row.map((fill, colIdx) => (
                                        <Grid 
                                            key={`rule30-${colIdx}`} 
                                            item 
                                            sx={{marginRight: "1px", marginBottom: "1px"}}
                                        >
                                            <Cell filled={fill}/>
                                        </Grid>
                                    ))}
                                </Grid>
                            ))}
                        </Stack>
                        <Stack 
                            sx={{
                                width: "max-content",
                                marginLeft: "auto",
                                marginRight: "auto"
                            }}
                        >
                            {[[false, true, true, true], [false, true, true, false]].map((row, idx) => (
                                    <Grid key={`rule30-row${idx}`}container>
                                        {row.map((fill, colIdx) => (
                                            <Grid 
                                                key={`rule30-${colIdx}`} 
                                                item 
                                                sx={{marginRight: "1px", marginBottom: "1px"}}
                                            >
                                                <Cell filled={fill}/>
                                            </Grid>
                                        ))}
                                    </Grid>
                                ))}
                        </Stack>
                    </Carousel>
                </Stack>
            </React.Fragment>
            }
        >
            <Button sx={{paddingTop: "45%"}} size="large">Hint</Button>
        </HtmlTooltip>
        </>
    )
}