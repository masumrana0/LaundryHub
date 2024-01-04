import { useEffect, useState } from "react";

const VerificationWaitingUi: React.FC = () => {
  const [message, setMessage] = useState<string>(
    "Please Check your email for verification"
  );
  const [timeLeft, setTimeLeft] = useState<number>(60); // Initial time in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000); // Update every second

    const countdown = setTimeout(() => {
      setMessage("Your message after 1 minute");
      clearInterval(timer);
    }, 60000); // 1 minute in milliseconds

    return () => {
      clearInterval(timer);
      clearTimeout(countdown);
    };
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-green-400 text-white text-center p-4">
      <p>{message}</p>
      <p>
        Time remaining: {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
};

export default VerificationWaitingUi;
