import { useState } from 'react';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { RadioButton } from 'primereact/radiobutton';

interface Date {
  name: string;
  code: string;
}

const months: Date[] = [
  { name: '1', code: '1' },
  { name: '2', code: '2' },
  { name: '3', code: '3' },
  { name: '4', code: '4' },
  { name: '5', code: '5' },
  { name: '6', code: '6' },
  { name: '7', code: '7' },
  { name: '8', code: '8' },
  { name: '9', code: '9' },
  { name: '10', code: '10' },
  { name: '11', code: '11' },
  { name: '12', code: '12' },
];

const dates: Date[] = [
  { name: '1', code: '1' },
  { name: '2', code: '2' },
  { name: '3', code: '3' },
  { name: '4', code: '4' },
  { name: '5', code: '5' },
  { name: '6', code: '6' },
  { name: '7', code: '7' },
  { name: '8', code: '8' },
  { name: '9', code: '9' },
  { name: '10', code: '10' },
  { name: '11', code: '11' },
  { name: '12', code: '12' },
  { name: '13', code: '13' },
  { name: '14', code: '14' },
  { name: '15', code: '15' },
  { name: '16', code: '16' },
  { name: '17', code: '17' },
  { name: '18', code: '18' },
  { name: '19', code: '19' },
  { name: '20', code: '20' },
  { name: '21', code: '21' },
  { name: '22', code: '22' },
  { name: '23', code: '23' },
  { name: '24', code: '24' },
  { name: '25', code: '25' },
  { name: '26', code: '26' },
  { name: '27', code: '27' },
  { name: '28', code: '28' },
  { name: '29', code: '29' },
  { name: '30', code: '30' },
  { name: '31', code: '31' },
];

function Form() {
  const [selectedMonth, setSelectedMonth] = useState<Date | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [gender, setGender] = useState<string>('');

  return (
    <div style={{ marginBlock: '5rem' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '2.25rem',
        }}
      >
        <div>生日</div>
        <div
          style={{
            display: 'flex',
            gap: '1.25rem',
          }}
        >
          <Dropdown
            value={selectedMonth}
            onChange={(e: DropdownChangeEvent) => setSelectedMonth(e.value)}
            options={months}
            optionLabel='name'
            placeholder='月'
            className='w-full md:w-14rem'
          />
          <Dropdown
            value={selectedDate}
            onChange={(e: DropdownChangeEvent) => setSelectedDate(e.value)}
            options={dates}
            optionLabel='name'
            placeholder='日'
            className='w-full md:w-14rem'
          />
          <Dropdown
            value={selectedDate}
            onChange={(e: DropdownChangeEvent) => setSelectedDate(e.value)}
            options={dates}
            optionLabel='name'
            placeholder='日'
            className='w-full md:w-14rem'
          />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '2.25rem',
        }}
      >
        <div>前次消費</div>
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          <Dropdown
            value={selectedDate}
            onChange={(e: DropdownChangeEvent) => setSelectedDate(e.value)}
            options={dates}
            optionLabel='name'
            placeholder='日'
            className='w-full md:w-14rem'
          />
          <Dropdown
            value={selectedDate}
            onChange={(e: DropdownChangeEvent) => setSelectedDate(e.value)}
            options={dates}
            optionLabel='name'
            placeholder='日'
            className='w-full md:w-14rem'
          />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div>性別</div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <RadioButton
              inputId='male'
              name='gender'
              value='male'
              onChange={(e) => setGender(e.value)}
              checked={gender === 'male'}
            />
            <label htmlFor='male' className='ml-2'>
              男
            </label>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <RadioButton
              inputId='female'
              name='gender'
              value='female'
              onChange={(e) => setGender(e.value)}
              checked={gender === 'female'}
            />
            <label htmlFor='female' className='ml-2'>
              女
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
