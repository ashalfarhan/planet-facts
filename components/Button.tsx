import { tw } from 'twind';
import { JSX } from 'preact';

export function Button(
  { active, ...props }: JSX.HTMLAttributes<HTMLButtonElement> & {
    active?: boolean;
  },
) {
  return (
    <button
      {...props}
      class={tw(
        'flex font-bold px-7 py-3 text-sm gap-7 border lg:hover:bg-dark-grey border-dark-grey transition-colors items-center focus:outline-none',
        { 'bg-accent border-none': active },
        props.class,
      )}
    />
  );
}
