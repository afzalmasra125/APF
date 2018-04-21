class Review < ApplicationRecord
      enum :relationship  {:peer => 0, :self => 1}
      enum :judgement  {:Does_Not_Meet_Expectation => "0" :Partially_Meets => "1", :Fully_Meets_Expectations => 2 , :Exceeds_Expectations =>  3}
      enum :teamwork {:Does_Not_Meet_Expectation => 0 :Partially_Meets => 1, :Fully_Meets_Expectations =>  2 , :Exceeds_Expectations =>  3}
      enum :leadership  {:Does_Not_Meet_Expectation => 0 :Partially_Meets => 1, :Fully_Meets_Expectations =>  2 , :Exceeds_Expectations =>  3}
      enum :technical {:Does_Not_Meet_Expectation => 0 :Partially_Meets => 1, :Fully_Meets_Expectations => 2 , :Exceeds_Expectations =>  3}
end
