import { useForm } from 'react-hook-form';

// type Props = {};

export default function Form() {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }

  return (
    <form
      target="_blnk"
      action="https://formsubmit.co/43c2cd9750fa299a04c0813ccc1d4623"
      method="POST"
      className="grid grid-cols-1 gap-5 w-full"
      onSubmit={onSubmit}
    >
      <input
        className="bg-primary-300 px-5 py-3 rounded-lg placeholder-white"
        type="text"
        placeholder="NAME"
        {...register('name', {
          required: true,
          maxLength: 100,
        })}
      />

      {errors.name && (
        <p className="text-primary-500 mt-1">
          {errors.name.type === 'required' && 'This field is required.'}
          {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
        </p>
      )}

      <input
        className="bg-primary-300 px-5 py-3 rounded-lg placeholder-white"
        placeholder="EMAIL"
        type="email"
        {...register('email', {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
      />
      {errors.email && (
        <p className="text-primary-500 mt-1">
          {errors.email.type === 'required' && 'This field is required.'}
          {errors.email.type === 'pattern' && 'Invalid email address.'}
        </p>
      )}

      <textarea
        className="bg-primary-300 py-3 placeholder-white rounded-lg px-5"
        rows={4}
        cols={50}
        placeholder="MESSAGE"
        {...register('message', {
          required: true,
          maxLength: 2000,
        })}
      />

      {errors.message && (
        <p className="text-primary-500 mt-1">
          {errors.message.type === 'required' && 'This field is required.'}
          {errors.message.type === 'maxLength' && 'Max length is 2000 char.'}
        </p>
      )}

      <button
        className="bg-secondary-500 w-[40%] md:w-[30%] items-center text-black px-7 py-2 md:px-10 md:py-3 rounded-md hover:text-white transition duration-500"
        type="submit"
      >
        SUBMIT
      </button>
    </form>
  );
}
