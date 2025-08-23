import { FiCheckCircle } from 'react-icons/fi';

function AvailabilityCard() {
    return (
        <div className="w-full border border-green-400 dark:border-green-600 bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-300 rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center gap-4 shadow-sm transition-all">
            <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-500 dark:text-green-400" size={20} />
                <p className="font-semibold text-base">Available for work</p>
            </div>
            <p className="text-sm md:ml-4 text-green-700 dark:text-green-400">
                Currently seeking exciting full-time roles or internships where I can learn, grow, and contribute.
            </p>
        </div>
    );
}

export default AvailabilityCard;