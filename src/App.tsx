import * as React from 'react';
import Display from './components/display/display';
import { Button } from './kit';

const App = () => {
  const [value, setValue] = React.useState(0);
  const [result, setResult] = React.useState(0);
  const [operation, setOperation] = React.useState('');

  return (
    <div className="shadow-md max-w-sm mx-auto p-2 m-2">
      <Display value={value > 0 ? value : result} />
      <main>
        <div className="flex flex-wrap justify-center">
          <Button
            title="Clear"
            onClick={() => {
              setValue(0);
              setResult(0);
              setOperation('');
            }}
          />
        </div>
        <div className="flex flex-row">
          <div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
              <Button
                title={number.toString()}
                onClick={() => setValue(value * 10 + number)}
                key={number}
              />
            ))}
          </div>
          <div>
            <Button
              title="+"
              onClick={() => {
                setOperation('+');
                if (result > 0) {
                  setResult(result + value);
                } else {
                  setResult(value);
                }
                setValue(0);
              }}
            />
            <Button
              title="="
              onClick={() => {
                if (operation === '+') {
                  setResult(result + value);
                  setValue(0);
                }
                setOperation('');
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
