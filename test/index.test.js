const { validateInput, flattenObject } = require("../dist");
const NOTIFICATION_DATA = require("./data/notification.json");
const { socials } = require("./data/socials.json");

// import { validateInput } from "../dist";

const answer = [
  {
    delay: "immediately",
  },
  {
    channels: "KC",
  },
  {
    message:
      "Welcome to Kazzah where your trusted pros are and 21st century life gets easier",
  },
  {
    bell_icons: "no",
  },
  {
    notification_center: "yes",
  },
  {
    repeat_cycle_if_completed: "none",
  },
  {
    is_active: "no",
  },
  {
    delay: "90 min",
  },
  {
    channels: "sms",
  },
  {
    message:
      "Give your signup a try again.  We know your going to enjoy the usefulness of the Kazzah platform and connecting with your close network of Friends and Pros",
  },
  {
    bell_icons: "no",
  },
  {
    notification_center: "yes",
  },
  {
    repeat_cycle_if_completed: "24H(2)",
  },
  {
    is_active: "yes",
  },
  {
    delay: "immediately",
  },
  {
    channels: "sms,KC",
  },
  {
    message:
      "Hoping you had a great experience.  Please take a moment to authorize payment to your trusted pro - {{name}}.",
  },
  {
    bell_icons: "yes",
  },
  {
    notification_center: "yes",
  },
  {
    repeat_cycle_if_completed: "24H(2)",
  },
  {
    is_active: "no",
  },
  {
    delay: "4 hours",
  },
  {
    channels: "sms,KC",
  },
  {
    message:
      "Hoping you had a great experience.  Please take a moment to authorize payment to your trusted pro.",
  },
  {
    bell_icons: "yes",
  },
  {
    notification_center: "yes",
  },
  {
    repeat_cycle_if_completed: "none",
  },
  {
    is_active: "no",
  },
  {
    delay: "immediately",
  },
  {
    channels: "KC",
  },
  {
    message: "Your payment to trusted pro {{name}} has been completed.",
  },
  {
    bell_icons: "no",
  },
  {
    notification_center: "no",
  },
  {
    repeat_cycle_if_completed: "none",
  },
  {
    is_active: "no",
  },
  {
    delay: "immediately",
  },
  {
    channels: "KC",
  },
  {
    message: "Your payment to trusted pro {{name}} has been completed.",
  },
  {
    bell_icons: "no",
  },
  {
    notification_center: "no",
  },
  {
    repeat_cycle_if_completed: "none",
  },
  {
    is_active: "no",
  },
  {
    delay: "immediately",
  },
  {
    channels: "sms,KC",
  },
  {
    message:
      "Your upcoming appointment with pro {{name}} on {{date}} is confirmed.",
  },
  {
    bell_icons: "yes",
  },
  {
    notification_center: "yes",
  },
  {
    repeat_cycle_if_completed: "none",
  },
  {
    is_active: "no",
  },
  {
    delay: "immediately",
  },
  {
    channels: "sms,KC",
  },
  {
    message:
      "Your upcoming appointment with {{name}} has been canceled due to a conflict. Apologies for the change, please re-enter my schedule to rebook for another date.",
  },
  {
    bell_icons: "yes",
  },
  {
    notification_center: "yes",
  },
  {
    repeat_cycle_if_completed: "none",
  },
  {
    is_active: "no",
  },
  {
    delay: "immediately",
  },
  {
    channels: "sms,KC",
  },
  {
    message:
      "Your Pro {{name}} has requested a switch with your next upcoming appointment. Please check your KZH messages to accept",
  },
  {
    bell_icons: "yes",
  },
  {
    notification_center: "yes",
  },
  {
    repeat_cycle_if_completed: "none",
  },
  {
    is_active: "no",
  },
  {
    delay: "Sunday night",
  },
  {
    channels: "sms",
  },
  {
    message:
      "You have {{appointments}} appointments coming up this week.   Check your KZH dashboard to see whats coming up next this week. {{link}}",
  },
  {
    bell_icons: "no",
  },
  {
    notification_center: "yes",
  },
  {
    repeat_cycle_if_completed: "none",
  },
  {
    is_active: "no",
  },
  {
    delay: "30 days from last appointment",
  },
  {
    channels: "KC  ",
  },
  {
    message:
      "You don’t have a next appointment scheduled withyour regular pros.{{link}} to get back on the calendar.",
  },
  {
    bell_icons: "no",
  },
  {
    notification_center: "no",
  },
  {
    repeat_cycle_if_completed: "none",
  },
  {
    is_active: "no",
  },
  {
    delay: "immediately",
  },
  {
    channels: "KC",
  },
  {
    message:
      "Your trusted Pro would like to get you back on the calendar for another appointment. {{link}} to see their schedule?",
  },
  {
    bell_icons: "yes",
  },
  {
    notification_center: "yes",
  },
  {
    repeat_cycle_if_completed: "none",
  },
  {
    is_active: "no",
  },
  {
    delay: "immediately",
  },
  {
    channels: "KC",
  },
  {
    message:
      "You have amazing content but we are running out of room.   For {{price}} month we can triple your content album.",
  },
  {
    bell_icons: "yes",
  },
  {
    notification_center: "yes",
  },
  {
    repeat_cycle_if_completed: "none",
  },
  {
    is_active: "no",
  },
  {
    delay: "immediately",
  },
  {
    channels: "KC",
  },
  {
    message:
      "{{member}} Shared image from last appointment with {{provider}} {{link}}",
  },
  {
    bell_icons: "yes",
  },
  {
    notification_center: "yes",
  },
  {
    repeat_cycle_if_completed: "none",
  },
  {
    is_active: "no",
  },
  {
    delay: "immediately",
  },
  {
    channels: "KC",
  },
  {
    message:
      "{{provider}} Shared image from lastest appointment with (PRO) {{link}}",
  },
  {
    bell_icons: "yes",
  },
  {
    notification_center: "yes",
  },
  {
    repeat_cycle_if_completed: "none",
  },
  {
    is_active: "no",
  },
  {
    delay: "immediately",
  },
  {
    channels: "sms",
  },
  {
    message:
      "Your trusted pro {{provider}} has invited you into the new exciting platform Kazzah. Join the movement to see a new way to find, book, pay, and manage your 21st century lifestyle.",
  },
  {
    bell_icons: "yes",
  },
  {
    notification_center: "yes",
  },
  {
    repeat_cycle_if_completed: "24H(2)",
  },
  {
    is_active: "no",
  },
  {
    delay: "immediately",
  },
  {
    channels: "KC",
  },
  {
    message: "Your trusted pro {{provider}} would like to join your dashboard.",
  },
  {
    bell_icons: "yes",
  },
  {
    notification_center: "yes",
  },
  {
    repeat_cycle_if_completed: "24H(2)",
  },
  {
    is_active: "no",
  },
  {
    delay: "immediately",
  },
  {
    channels: "sms",
  },
  {
    message:
      "Your friend {{member}} invited you into the Kazzah Network.  {{link}} to join and discover the power of Kazzah.",
  },
  {
    bell_icons: "yes",
  },
  {
    notification_center: "yes",
  },
  {
    repeat_cycle_if_completed: "24H(2)",
  },
  {
    is_active: "no",
  },
  {
    delay: "immediately",
  },
  {
    channels: "KC",
  },
  {
    message:
      "Your friend {{member}} invited you into the Kazzah Network. {{link}}",
  },
  {
    bell_icons: "yes",
  },
  {
    notification_center: "yes",
  },
  {
    repeat_cycle_if_completed: "24H(1)",
  },
  {
    is_active: "no",
  },
  {
    delay: "immediately",
  },
  {
    channels: "sms",
  },
  {
    message:
      "Your Friend {{member}} shared their pro with you. {{link}} to join and discover the full power of kazzah",
  },
  {
    bell_icons: "yes",
  },
  {
    notification_center: "yes",
  },
  {
    repeat_cycle_if_completed: "no",
  },
  {
    is_active: "no",
  },
  {
    delay: "immediately",
  },
  {
    channels: "KC",
  },
  {
    message: "Your Friend {{member}} shared their pro with you.",
  },
  {
    bell_icons: "yes",
  },
  {
    notification_center: "yes",
  },
  {
    repeat_cycle_if_completed: "no",
  },
  {
    is_active: "no",
  },
  {
    delay: "immediately",
  },
  {
    channels: "sms",
  },
  {
    message:
      "Your Friend {{member}} shared their Channel with you. {{link}} to join and discover the full power of kazzah",
  },
  {
    bell_icons: "yes",
  },
  {
    notification_center: "yes",
  },
  {
    repeat_cycle_if_completed: "no",
  },
  {
    is_active: "no",
  },
  {
    delay: "immediately",
  },
  {
    channels: "KC",
  },
  {
    message: "Your Friend {{member}} shared their Channel with you.",
  },
  {
    bell_icons: "yes",
  },
  {
    notification_center: "yes",
  },
  {
    repeat_cycle_if_completed: "no",
  },
  {
    is_active: "no",
  },
  {
    delay: "immediately",
  },
  {
    channels: "KC",
  },
  {
    message:
      "Your trusted pro is offering a special for clients only. Check out her latest promo {{link}}",
  },
  {
    bell_icons: "yes",
  },
  {
    notification_center: "yes",
  },
  {
    repeat_cycle_if_completed: "no",
  },
  {
    is_active: "no",
  },
  {
    delay: "immediately",
  },
  {
    channels: "KC",
  },
  {
    message:
      "Your trusted pro is offering a special for clients only. Check out her latest promo {{link}}",
  },
  {
    bell_icons: "yes",
  },
  {
    notification_center: "yes",
  },
  {
    repeat_cycle_if_completed: "no",
  },
  {
    is_active: "no",
  },
  {
    delay: "immediately",
  },
  {
    channels: "KC",
  },
  {
    message:
      "Please complete payment to {{name}} for your appointment on {{date}}. ",
  },
  {
    bell_icons: "yes",
  },
  {
    notification_center: "yes",
  },
  {
    repeat_cycle_if_completed: "no",
  },
  {
    is_active: "no",
  },
  {
    delay: "immediately",
  },
  {
    channels: "KC",
  },
  {
    message: "{{name}} has rebooked you for next appointment on {{date}}",
  },
  {
    bell_icons: "no",
  },
  {
    notification_center: "yes",
  },
  {
    repeat_cycle_if_completed: "none",
  },
  {
    is_active: "no",
  },
  {
    delay: "immediately",
  },
  {
    channels: "KC",
  },
  {
    message:
      "{{pro_name}} appointment with {{member_name}} is complete now, please check out and take photos",
  },
  {
    bell_icons: "no",
  },
  {
    notification_center: "yes",
  },
  {
    repeat_cycle_if_completed: "none",
  },
  {
    is_active: "no",
  },
];

describe("validateInput", () => {
  it("should return flatten Array ", () => {
    // const result = socials.flatMap((obj) => flattenObject(obj));
    // const location = ["client-triggers"]["14"]["TRUSTED_PRO_POST_CONTENT"][
    //   "channels"
    // ];

    // Accessing the data using the given location
    const location = [
      "client-triggers",
      "14",
      "TRUSTED_PRO_POST_CONTENT",
      "channels",
    ];
    const channelsData = location.reduce((obj, key) => {
      console.log("obj?.[", key, "] =", obj?.[key]);
      return obj?.[key];
    }, NOTIFICATION_DATA);

    if (channelsData) {
      console.log("channelsData : ", channelsData);
      // You can now work with the channelsData object here
    } else {
      console.log("Invalid location or data not found.");
    }
    // console.log(NOTIFICATION_DATA.location);
    const result = flattenObject(NOTIFICATION_DATA);
    // const result = flattenObject(socials);
    // const result = flattenObject(data);
    // console.log("total keys: ", result);
    expect(result.length).toBe(answer.length);
  });

  it("should return false for repeated value", () => {
    const data = {
      key1: "value1",
      key2: "value2",
      key3: "value1", // Repeated value
    };
    const result = validateInput(data);
    expect(result).toBe(false);
  });

  it("should return false for boolean value", () => {
    const data = {
      key1: "value1",
      key2: "value2",
      key3: true, // Boolean value
    };
    const result = validateInput(data);
    expect(result).toBe(false);
  });
});
