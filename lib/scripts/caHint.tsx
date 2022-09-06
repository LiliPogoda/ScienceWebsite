import * as React from "react"
import {Cell} from "./ca"
import {
    Grid,
    Stack,
    Typography,
    Button
  } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


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
                <IconButton 
                    color="primary" 
                    id="closePopover"
                    aria-label="close popover" 
                    onClick={() => setShow(false)} 
                    sx={{width: "max-content", marginLeft: "auto"}}
                >
                    <CloseIcon sx={{fontSize: 20}}/>
                </IconButton>
                <Typography color="inherit">Try out the following combinations:</Typography>
                <Stack>
                    <Grid container>
                        <Grid item sx={{fontSize: 19}}>
                            1.
                        </Grid>
                        {[false, true, false, true, true, false, true, false].map((fill, idx) => (
                            <Grid key={`rule30-${idx}`} item sx={{marginRight: "1px"}}>
                                <Cell filled={fill}/>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
            </React.Fragment>
            }
        >
            <Button sx={{paddingTop: "45%"}} size="large">Hint</Button>
        </HtmlTooltip>
        </>
    )
}