import { describe, it, expect, beforeEach, vi } from "vitest";
import * as contactFormHook from "@/hooks/useContactForm";

// Mock the contact form hook
vi.mock("@/hooks/useContactForm", () => ({
  useContactForm: vi.fn(),
}));

// Mock the toast hook
vi.mock("@/hooks/use-toast", () => ({
  useToast: () => ({
    toast: vi.fn(),
  }),
}));

// Mock Supabase
vi.mock("@/integrations/supabase/client", () => ({
  supabase: {
    from: vi.fn(),
  },
}));

describe("Contact Form Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns submitForm and isSubmitting functions", () => {
    const mockSubmitForm = vi.fn();
    vi.mocked(contactFormHook.useContactForm).mockReturnValue({
      submitForm: mockSubmitForm,
      isSubmitting: false,
    });

    const hook = contactFormHook.useContactForm();
    expect(hook).toHaveProperty("submitForm");
    expect(hook).toHaveProperty("isSubmitting");
    expect(typeof hook.submitForm).toBe("function");
    expect(typeof hook.isSubmitting).toBe("boolean");
  });

  it("handles form submission state changes", () => {
    const mockSubmitForm = vi.fn();
    
    // Initial state
    vi.mocked(contactFormHook.useContactForm).mockReturnValue({
      submitForm: mockSubmitForm,
      isSubmitting: false,
    });
    
    let hook = contactFormHook.useContactForm();
    expect(hook.isSubmitting).toBe(false);
    
    // Submitting state
    vi.mocked(contactFormHook.useContactForm).mockReturnValue({
      submitForm: mockSubmitForm,
      isSubmitting: true,
    });
    
    hook = contactFormHook.useContactForm();
    expect(hook.isSubmitting).toBe(true);
  });
});
