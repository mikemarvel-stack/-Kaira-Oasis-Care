import { describe, it, expect } from "vitest";
import {
  ORGANIZATION,
  CONTACT,
  ROUTES,
  STATS,
  SOCIAL_MEDIA,
  COMPANY_SERVICES,
} from "@/lib/constants";

describe("Constants", () => {
  describe("ORGANIZATION", () => {
    it("has required properties", () => {
      expect(ORGANIZATION.name).toBe("kaira Oasis care");
      expect(ORGANIZATION.tagline).toBe("Nature's Embrace");
      expect(ORGANIZATION.founded).toBe(1995);
      expect(ORGANIZATION.logo.initials).toBe("KO");
    });

    it("has non-empty description and mission", () => {
      expect(ORGANIZATION.description).toBeTruthy();
      expect(ORGANIZATION.mission).toBeTruthy();
    });
  });

  describe("CONTACT", () => {
    it("has valid phone number", () => {
      expect(CONTACT.phone).toMatch(/^\d{1}-\d{3}-\d{3}-\d{4}$/);
    });

    it("has valid email format", () => {
      expect(CONTACT.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });

    it("has complete address information", () => {
      expect(CONTACT.address).toBeTruthy();
      expect(CONTACT.city).toBeTruthy();
      expect(CONTACT.state).toBeTruthy();
      expect(CONTACT.zipCode).toBeTruthy();
    });

    it("has office hours", () => {
      expect(CONTACT.hours.weekday).toBeTruthy();
      expect(CONTACT.hours.weekend).toBeTruthy();
    });
  });

  describe("ROUTES", () => {
    it("has all required routes", () => {
      expect(ROUTES.home).toBe("/");
      expect(ROUTES.services).toBe("/services");
      expect(ROUTES.about).toBe("/about");
      expect(ROUTES.resources).toBe("/resources");
      expect(ROUTES.blog).toBe("/blog");
      expect(ROUTES.contact).toBe("#contact");
    });
  });

  describe("STATS", () => {
    it("has all required statistics", () => {
      expect(STATS.yearsOfService).toBeTruthy();
      expect(STATS.familiesServed).toBeTruthy();
      expect(STATS.patientsServed).toBeTruthy();
      expect(STATS.teamMembers).toBeTruthy();
      expect(STATS.supportAvailable).toBe("24/7");
    });
  });

  describe("SOCIAL_MEDIA", () => {
    it("has valid URLs", () => {
      const urlPattern = /^https:\/\//;
      expect(SOCIAL_MEDIA.facebook).toMatch(urlPattern);
      expect(SOCIAL_MEDIA.linkedin).toMatch(urlPattern);
      expect(SOCIAL_MEDIA.twitter).toMatch(urlPattern);
    });
  });

  describe("COMPANY_SERVICES", () => {
    it("has at least 6 services", () => {
      expect(COMPANY_SERVICES.length).toBeGreaterThanOrEqual(6);
    });

    it("contains core services", () => {
      expect(COMPANY_SERVICES).toContain("Comfort Care");
      expect(COMPANY_SERVICES).toContain("Family Support");
      expect(COMPANY_SERVICES).toContain("In-Home Care");
      expect(COMPANY_SERVICES).toContain("24/7 Availability");
    });
  });
});
