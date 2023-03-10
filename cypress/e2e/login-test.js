/// <reference types="Cypress" />

describe("Login page test for TikChak", () => {
  beforeEach(() => {
    cy.visit("https://app.tickchak.co.il/");
    cy.intercept(
      {
        method: "POST",
        url: "https://app.tickchak.co.il/v1/loginEmail",
      },

      {
        fixture: "../fixtures/mocking-sms.json",
      }
    );
  });

  it("Check if all the elements in the form are visible", () => {
    cy.get(".sc-1a1ajin-2 > .sc-eh1yog-0").type("ori.ngr@gmail.com");
    for (let i = 0; i < 8; i++) {
      i !== 3 && cy.get(".sc-1a1ajin-" + i).should("be.visible");
    }
  });
  it("Validate that i could send only valid email and password", () => {
    cy.get(".sc-1hhtwjc-0 > .sc-hBxehG").click();
    cy.get(".sc-eh1yog-2")
      .should("have.attr", "class")
      .and("match", /invalid/);
    cy.get(".sc-1a1ajin-2 > .sc-eh1yog-0").type("abc");
    cy.get(".sc-eh1yog-3").should(
      "contain",
      "אופסס… לכתובת דוא״ל יש חוקים משלה, בדקו שוב"
    );
    cy.get(".sc-1a1ajin-7 > .sc-eh1yog-0").click();
    cy.get(".sc-1a1ajin-3 > .sc-eh1yog-0 > input").type("aa");
    cy.get(".sc-1a1ajin-3 > .sc-eh1yog-0 > .sc-eh1yog-3").should(
      "contain",
      "הסיסמה קצרה מידי"
    );
  });

  it("Check if the password is hidden and can be revealed", () => {
    cy.get(".sc-1a1ajin-7 > .sc-eh1yog-0").click();
    cy.get(".sc-1a1ajin-3 > .sc-eh1yog-0 > input").type("123456789");
    cy.get(".sc-1a1ajin-3 > .sc-eh1yog-0 > input").should(
      "not.contain",
      123456789
    );
  });

  it('Check the "Send me SMS" feature', () => {
    cy.get(".sc-1a1ajin-2 > .sc-eh1yog-0").type("ori.ngr@gmail.com");
    cy.get(".sc-1hhtwjc-0 > .sc-hBxehG").click();
    cy.get('[type="number"]').each(($el, index, $list) => {
      cy.wrap($el).type(0);
    });

    cy.get(".sc-1edk3uj-1").should("contain", "קורה,נסו שוב");
    cy.get(".sc-1edk3uj-4").click();
    cy.get(".sc-1edk3uj-1").should("contain", "XXX-XXX3322");
    cy.get(".sc-10m6w8o-3 > .sc-hBxehG").click();
  });
  it('Check the "I have a password" feature', () => {
    cy.get(".sc-1a1ajin-2 > .sc-eh1yog-0").type("ori.ngr@gmail.com");
    cy.get(".sc-1a1ajin-7 > .sc-eh1yog-0").click();
    cy.get(".sc-1a1ajin-3 > .sc-eh1yog-0 > input").type("Aa12345678");
    cy.get(".sc-1hhtwjc-0 > .sc-hBxehG").click();
    cy.wait(6000);
    cy.get(".sc-u89vph-3").should("contain", "היי, טוב לראותך אורי נגר");
    cy.contains(".sc-u89vph-3", "היי, טוב לראותך אורי נגר").should(
      "not.be.hidden"
    );
  });
});
