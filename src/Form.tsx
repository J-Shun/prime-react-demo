import { useState } from 'react';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { RadioButton } from 'primereact/radiobutton';
import { years, months, dates } from './data/dropdownOptoion';

function Form() {
  const [selectedYear, setSelectedYear] = useState<Date | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<Date | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [gender, setGender] = useState<string>('');

  return (
    <div style={{ marginBlock: '5rem' }}>
      <div
        style={{
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: '6rem 1fr',
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
            value={selectedYear}
            onChange={(e: DropdownChangeEvent) => setSelectedYear(e.value)}
            options={years}
            optionLabel='name'
            placeholder='年'
          />
          <Dropdown
            value={selectedMonth}
            onChange={(e: DropdownChangeEvent) => setSelectedMonth(e.value)}
            options={months}
            optionLabel='name'
            placeholder='月'
          />
          <Dropdown
            value={selectedDate}
            onChange={(e: DropdownChangeEvent) => setSelectedDate(e.value)}
            options={dates}
            optionLabel='name'
            placeholder='日'
          />
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: '6rem 1fr',
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
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: '6rem 1fr',
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
