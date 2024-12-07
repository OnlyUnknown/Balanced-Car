class Group < ApplicationRecord
  belongs_to :car, optional: true
  belongs_to :driver, optional: true
end
