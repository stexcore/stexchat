export default {

    getTimeDistance(timestamp: number): string {
        const now = Date.now();
        const differenceInSeconds = Math.floor((now - timestamp) / 1000);
    
        // Time range
        const MINUTE = 60;
        const HOUR = 3600;
        const DAY = 86400;
        const WEEK = 604800;
        const MONTH = 2592000;
        const YEAR = 31536000;
    
        // Evaluate difference
        if (differenceInSeconds < MINUTE) {
            return `${differenceInSeconds} sec`;
        } else if (differenceInSeconds < HOUR) {
            const minutes = Math.floor(differenceInSeconds / MINUTE);
            return `${minutes} min`;
        } else if (differenceInSeconds < DAY) {
            const hours = Math.floor(differenceInSeconds / HOUR);
            return `${hours} hour${hours !== 1 ? 's' : ''}`;
        } else if (differenceInSeconds < DAY * 2) {
            return "yesterday";
        } else if (differenceInSeconds < DAY * 3) {
            return "day before yesterday";
        } else if (differenceInSeconds < WEEK) {
            const days = Math.floor(differenceInSeconds / DAY);
            return `${days} day${days !== 1 ? 's' : ''}`;
        } else if (differenceInSeconds < WEEK * 4) {
            const weeks = Math.floor(differenceInSeconds / WEEK);
            return `${weeks} week${weeks !== 1 ? 's' : ''}`;
        } else if (differenceInSeconds < MONTH * 12) {
            const months = Math.floor(differenceInSeconds / MONTH);
            return `${months} month${months !== 1 ? 's' : ''}`;
        } else {
            const years = Math.floor(differenceInSeconds / YEAR);
            return `${years} year${years !== 1 ? 's' : ''}`;
        }        
    }
    
}