import React from 'react';
interface AlertProps {
  text: string;
}

const Alarm: React.FC<AlertProps> = ({ text }) => {
  return (
    <div
      className="flex w-[300px] h-[81px] items-center p-5 self-center rounded-lg

        bg-white text-black
        dark:bg-gray-800 dark:text-blue-400"
      role="alert"
    >
      <svg
        className="inline w-[30px] h-[30px] mr-9 fill-main-color"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 25 25"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.8125 13C0.8125 6.26903 6.26903 0.8125 13 0.8125C19.731 0.8125 25.1875 6.26903 25.1875 13C25.1875 19.731 19.731 25.1875 13 25.1875C6.26903 25.1875 0.8125 19.731 0.8125 13ZM11.6953 11.1981C13.1281 10.4817 14.7414 11.7758 14.3528 13.3299L13.4666 16.8749L13.5184 16.849C13.9815 16.6174 14.5447 16.8051 14.7762 17.2683C15.0078 17.7314 14.8201 18.2945 14.357 18.526L14.3051 18.552C12.8723 19.2684 11.259 17.9743 11.6476 16.4202L12.5338 12.8751L12.482 12.901C12.0189 13.1326 11.4557 12.9449 11.2242 12.4818C10.9926 12.0187 11.1803 11.4555 11.6434 11.224L11.6953 11.1981ZM13 9.25C13.5178 9.25 13.9375 8.83027 13.9375 8.3125C13.9375 7.79473 13.5178 7.375 13 7.375C12.4822 7.375 12.0625 7.79473 12.0625 8.3125C12.0625 8.83027 12.4822 9.25 13 9.25Z"
          fill="#BFE647"
        />
      </svg>
      <span className="text-alert">{text}</span>
    </div>
  );
};

export default Alarm;
