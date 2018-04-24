class Review < ApplicationRecord
      enum relationship:  {peer: 0, self: 1}
      enum judgement:  {does_not_meet_expectation: 0, partially_meets: 1, fully_meets_expectations: 2 , exceeds_expectations: 3}
      enum teamwork: {does_not_meet_expectation: 0, partially_meets: 1, fully_meets_expectations: 2 , exceeds_expectations: 3}
      enum leadership:  {does_not_meet_expectation: 0, partially_meets: 1, fully_meets_expectations: 2 , exceeds_expectations: 3}
      enum technical: {does_not_meet_expectation: 0, partially_meets: 1, fully_meets_expectations: 2 , exceeds_expectations: 3}
end
