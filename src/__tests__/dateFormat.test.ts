function dateFormat(shortDate: string): string {
    // this function will accept a numeric short date:
    // MM-DD-YYYY
    // and will return a long date, for example:
    // "2-5-2019" => "February 5, 2019"
    // "11-12-2022" => "November 12, 2022"
    let month1: string = "February";
    let day1: number = 5;
    let year1: number = 2019;

    return month1 + " " + day1 + ", " + year1;
  
  }

  describe("dateFormat", () => {
      it("should display numeric short date correctly",() => {
          expect(dateFormat("2-5-2019")).toBe("February 5, 2019");
          expect(dateFormat("11-12-2022")).toBe("November 12, 2022");
      });
    });