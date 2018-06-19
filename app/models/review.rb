class Review < ApplicationRecord
      enum relationship:  {peer: 0, self: 1}
      enum judgement: [:does_not_meet_expectation, :partially_meets, :fully_meets_expectations, :exceed_expectations ], _prefix: :judgement
      enum teamwork: [:does_not_meet_expectation, :partially_meets, :fully_meets_expectations, :exceed_expectations ], _prefix: :teamwork
      enum leadership: [:does_not_meet_expectation, :partially_meets, :fully_meets_expectations, :exceed_expectations ], _prefix: :leadership
      enum technical: [:does_not_meet_expectation, :partially_meets, :fully_meets_expectations, :exceed_expectations ], _prefix: :technical
      belongs_to :reviewee, class_name: "Employee"
      belongs_to :reviewer, class_name: "Employee", optional: true
end
