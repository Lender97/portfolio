import { FunctionComponent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from 'emailjs-com';

interface IFormInput {
  naam: string;
  email: string;
  vraag: string;
}

const Form: FunctionComponent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  
  const onSubmit: SubmitHandler<IFormInput> = data => {
    const templateParams = {
        from_name: data.naam,
        from_email: data.email,
        message: data.vraag,
        to_email: 'lender.boeckx97@hotmail.com',
      };
  
      emailjs.send('service_5upew66', 'template_7kenwl3', templateParams, '_5TLCpCbQDEkcDrXD')
        .then((response) => {
          console.log('Email successfully sent!', response.status, response.text);
        })
        .catch((err) => {
          console.error('There has been an error. Here some thoughts on the error that occured:', err);
        });
  };

  return (
    <div className="flex-left">
    <form onSubmit={handleSubmit(onSubmit)} className='borderGreen p-3'>
      <div>
        <p>Naam</p>
        <input id="name" {...register('naam', { required: 'Gelieve een naam in te geven' })} />
        {errors.naam && <p>{errors.naam.message}</p>}
      </div>

      <div>
        <p>Email</p>
        <input id="email" type="email" {...register('email', { 
          required: 'Gelieve een email adres in te geven.', 
          pattern: { 
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
            message: 'Ongeldig email adres' 
          }
        })} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <p>Bericht</p>
        <textarea id="vraag" {...register('vraag')} />
        {errors.vraag && <p>{errors.vraag.message}</p>}
      </div>

      <button type="submit" className='btn btn-primary'>Verzenden</button>
    </form>
    </div>
  );
}

export default Form;
