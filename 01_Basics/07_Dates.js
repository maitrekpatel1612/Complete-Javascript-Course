//* *************** JavaScript Date Objects ***************

//! Date objects represent a single moment in time
//! Internally, dates are stored as the number of milliseconds since January 1, 1970 (UTC)

//* Creating Date Objects - Different ways
const today = new Date(); // Current date and time
console.log("Current Date:", today); // 2025-03-14T00:06:01.964Z

// Creating date with specific date string
const specificDate = new Date("2023-01-14");
console.log("Specific Date:", specificDate); // 2023-01-14T00:00:00.000Z

// Creating date with year, month, day (months are 0-indexed, 0=January)
const birthday = new Date(1996, 4, 25); // May 25, 1996
console.log("Birthday:", birthday);

// Full parameters: year, month, day, hours, minutes, seconds, milliseconds
const fullSpecificDate = new Date(2023, 11, 31, 23, 59, 59, 999);
console.log("New Year's Eve:", fullSpecificDate);

// Creating date from milliseconds (since Jan 1, 1970)
const dateFromMs = new Date(1640995200000); // 01 Jan 2022
console.log("Date from milliseconds:", dateFromMs);

//* *************** Date Methods ***************

// Getting date components
const now = new Date();
console.log("\nDate Components:");
console.log("Full Date:", now.toString());
console.log("Date:", now.toDateString());
console.log("Time:", now.toTimeString());
console.log("Day of month:", now.getDate());
console.log("Day of week (0-6):", now.getDay()); //! 0=Sunday, 6=Saturday
console.log("Month (0-11):", now.getMonth()); //! 0=January, 11=December
console.log("Year:", now.getFullYear());

// Getting time components
console.log("\nTime Components:");
console.log("Hours (0-23):", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());
console.log("Timestamp (ms since Jan 1, 1970):", now.getTime());

//* *************** Modifying Dates ***************

const futureDate = new Date();
console.log("\nBefore modification:", futureDate);

// Setting date components
futureDate.setFullYear(2025);
futureDate.setMonth(6); //! July
futureDate.setDate(15);
console.log("After date modification:", futureDate);

// Setting time components
futureDate.setHours(10);
futureDate.setMinutes(30);
futureDate.setSeconds(0);
console.log("After time modification:", futureDate);

//* *************** Date Formatting ***************

const sampleDate = new Date("2023-07-25T14:30:00");
console.log("\nDate Formatting Examples:");
console.log("toString():", sampleDate.toString());
console.log("toDateString():", sampleDate.toDateString());
console.log("toTimeString():", sampleDate.toTimeString());
console.log("toISOString():", sampleDate.toISOString());
console.log("toUTCString():", sampleDate.toUTCString());
console.log("toLocaleDateString():", sampleDate.toLocaleDateString());
console.log("toLocaleTimeString():", sampleDate.toLocaleTimeString());
console.log("toLocaleString():", sampleDate.toLocaleString());

// Custom formatting with options
const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit' 
};
console.log("Custom format:", sampleDate.toLocaleString('en-US', options));

//* *************** Date Calculations ***************

// Calculate time difference
const startDate = new Date("2023-01-01");
const endDate = new Date("2023-12-31");
const timeDifference = endDate - startDate; // difference in milliseconds
console.log("\nDate Calculations:");
console.log("Time difference in milliseconds:", timeDifference);
console.log("Time difference in days:", timeDifference / (1000 * 60 * 60 * 24));

// Add days to a date
const today2 = new Date();
console.log("Today:", today2.toDateString());
const tomorrow = new Date();
tomorrow.setDate(today2.getDate() + 1);
console.log("Tomorrow:", tomorrow.toDateString());

//* *************** Practical Example: Age Calculator ***************
function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    //! If birthday hasn't occurred yet this year, subtract 1
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

console.log("\nAge Calculator Example:");
console.log("Age if born on May 25, 1996:", calculateAge("1996-05-25"));
console.log("Age if born on December 31, 2000:", calculateAge("2000-12-31"));

//* *************** Additional Practical Examples ***************

//! -------- Example 1: Event Countdown Timer --------
function getCountdown(targetDate) {
    const currentDate = new Date();
    const targetDateTime = new Date(targetDate);
    
    // Calculate difference in milliseconds
    const timeLeft = targetDateTime - currentDate;
    
    //? Check if date is in the past
    if (timeLeft < 0) {
        return "Event has already occurred";
    }
    
    // Convert to days, hours, minutes, seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

const christmasDate = "2023-12-25";
console.log("\nCountdown Example:");
console.log(`Time until Christmas (${christmasDate}):`, getCountdown(christmasDate)); 
//! Output: "Time until Christmas (2023-12-25): X days, Y hours, Z minutes, A seconds" (varies based on current date)

//! -------- Example 2: Meeting Scheduler Across Timezones --------
function scheduleMeeting(dateString, durationMinutes, timezone) {
    // Create date in the specified timezone
    const options = {
        timeZone: timezone,
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true
    };
    
    const meetingStart = new Date(dateString);
    const formattedStart = meetingStart.toLocaleString('en-US', options);
    
    // Calculate end time
    const meetingEnd = new Date(meetingStart.getTime() + durationMinutes * 60000);
    const formattedEnd = meetingEnd.toLocaleString('en-US', options);
    
    return {
        start: formattedStart,
        end: formattedEnd,
        timezone: timezone,
        duration: durationMinutes
    };
}

const nyMeeting = scheduleMeeting("2023-11-15T14:00:00", 60, "America/New_York");
console.log("\nMeeting Scheduler Example:");
console.log("New York Meeting Details:", nyMeeting);
//! Output: "New York Meeting Details: {
//!   start: "November 15, 2023, 02:00 PM", 
//!   end: "November 15, 2023, 03:00 PM", 
//!   timezone: "America/New_York", 
//!   duration: 60
//! }"

const tokyoMeeting = scheduleMeeting("2023-11-15T14:00:00", 60, "Asia/Tokyo");
console.log("Tokyo Meeting Details:", tokyoMeeting);
//! Output: "Tokyo Meeting Details: {
//!   start: "November 15, 2023, 02:00 PM",
//!   end: "November 15, 2023, 03:00 PM", 
//!   timezone: "Asia/Tokyo", 
//!   duration: 60
//! }"

//! -------- Example 3: Date Formatting for Different Locales --------
function formatDateForLocales(date) {
    const sampleDate = new Date(date);
    const locales = ["en-US", "ja-JP", "de-DE", "ar-SA", "fr-FR", "es-ES"];
    const results = {};
    
    const formatOptions = { 
        dateStyle: 'full',
        timeStyle: 'short'
    };
    
    locales.forEach(locale => {
        results[locale] = sampleDate.toLocaleString(locale, formatOptions);
    });
    
    return results;
}

const worldFormats = formatDateForLocales("2023-10-25T18:30:00");
console.log("\nDate Formats Around the World:");
console.log("US (English):", worldFormats["en-US"]); 
//! Output: "US (English): Wednesday, October 25, 2023 at 6:30 PM"
console.log("Japan:", worldFormats["ja-JP"]);
//! Output: "Japan: 2023年10月25日水曜日 18:30"
console.log("Germany:", worldFormats["de-DE"]); 
//! Output: "Germany: Mittwoch, 25. Oktober 2023 um 18:30"
console.log("Saudi Arabia:", worldFormats["ar-SA"]); 
//! Output: "Saudi Arabia: الأربعاء، ٢٥ أكتوبر ٢٠٢٣ ٦:٣٠ م"
console.log("France:", worldFormats["fr-FR"]); 
//! Output: "France: mercredi 25 octobre 2023, 18:30"
console.log("Spain:", worldFormats["es-ES"]); 
//! Output: "Spain: miércoles, 25 de octubre de 2023, 18:30"

//! -------- Example 4: Business Days Calculator --------
function addBusinessDays(startDate, daysToAdd) {
    const result = new Date(startDate);
    let daysAdded = 0;
    
    while (daysAdded < daysToAdd) {
        // Add a day
        result.setDate(result.getDate() + 1);
        
        //? Check if it's a weekday (0 = Sunday, 6 = Saturday)
        const dayOfWeek = result.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
            daysAdded++;
        }
    }
    
    return result;
}

const projectStart = new Date("2023-11-01");
const deliveryDate = addBusinessDays(projectStart, 10); // Add 10 business days

console.log("\nBusiness Days Calculation:");
console.log("Project start date:", projectStart.toDateString()); 
//! Output: "Project start date: Wed Nov 01 2023"
console.log("Delivery date after 10 business days:", deliveryDate.toDateString()); 
//! Output: "Delivery date after 10 business days: Wed Nov 15 2023"

//! -------- Example 5: Age in Different Units --------
function calculateAgeDetail(birthdate) {
    const birthDate = new Date(birthdate);
    const today = new Date();
    
    // Time difference in milliseconds
    const timeDiff = today - birthDate;
    
    // Convert to various units
    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30.4375));
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor(timeDiff / (1000 * 60));
    const seconds = Math.floor(timeDiff / 1000);
    
    return { years, months, days, hours, minutes, seconds };
}

const ageDetails = calculateAgeDetail("2000-01-01");
console.log("\nDetailed Age Calculation:");
console.log("For someone born on January 1, 2000:"); 
console.log("Age in years:", ageDetails.years);  //! Output: "Age in years: ~23" (changes with current date)
console.log("Age in months:", ageDetails.months); //! Output: "Age in months: ~280" (changes with current date)
console.log("Age in days:", ageDetails.days);     //! Output: "Age in days: ~8760" (changes with current date)
console.log("Age in hours:", ageDetails.hours);   //! Output: "Age in hours: ~210240" (changes with current date)

//* *************** End of Additional Examples ***************
