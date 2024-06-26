class Driver < ApplicationRecord
  belongs_to :car, optional: true
end
