import * as React from "react"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

export default function ChoiceQuestion(
  {
    question,
    choices,
    hint, 
    answerIdx,
    explanation}
  :{
    question: string|JSX.Element;
    choices: Array<string>;
    hint: string
    answerIdx: number;
    explanation: string|JSX.Element;
  }) {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');
  const [success, setSuccess] = React.useState(false)

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    setHelperText(' ');
    setError(false);
    setSuccess(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    for (let idx=0; idx < choices.length; idx++) {
      if (value === `answer${idx}` && idx === answerIdx) {
        setSuccess(true)
        setError(false);
        return;
      } else if (value === `answer${idx}` && idx !== answerIdx) {
        setHelperText(`Sorry, wrong answer! ${hint}`);
        setSuccess(false)
        setError(true);
        return;
      }
      setHelperText('Please select an option.');
      setSuccess(false)
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel id={`simpleQuestion${question}`}>{question}</FormLabel>
        <RadioGroup
          aria-labelledby={`simpleQuestion${question}`}
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
            {choices.map((choice, idx) => (
                <FormControlLabel key={`answer${idx}`} value={`answer${idx}`} control={<Radio />} label={choice} />
            ))}
        </RadioGroup>
        <FormHelperText>{success ? explanation : helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </FormControl>
    </form>
  );
}